import { checkIfRegistered } from "@/lib/functions";
import User from "@/interface/user";
import Playlist from "@/interface/playlist";
import prisma from "../lib/prisma";


// const prisma = {
//     user: {
//       findUnique: jest.fn(),
//     },
//   };
  let createdUser: User; // Typed as User
  const fixedCreatedAt = new Date();
  const fixedUpdatedAt = new Date();

  beforeAll(async () => {
    
    // Create a user in the test database with fixed dates
    createdUser = await prisma.user.create({
      data: {
        email: 'alphabet@example.com',
        firstName: 'John',
        lastName: 'Doe',
        password: 'encrypted_password_here',
        createdAt: fixedCreatedAt,
        updatedAt: fixedUpdatedAt,
      }
    });
  });

  afterAll(async () => {
    // Clean up the database after tests by deleting only the created test user
    if (createdUser && createdUser.id) {
      await prisma.user.delete({
        where: {
          id: createdUser.id
        }
      });
    }
    await prisma.$disconnect();
  });
  
  describe('checkIfRegistered', () => {
    it('should return a user object if the user is found', async () => {
      // Setup
      const mockUser = {email: 'test@example.com', password: 'Test User' };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
  
      // Execute
      const result = await checkIfRegistered('test@example.com');
  
      // Assert
      expect(result).toEqual(mockUser);
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'test@example.com' },
      });
    });
  
    it('should return null if the user is not found', async () => {
      // Setup
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
  
      // Execute
      const result = await checkIfRegistered('nonexistent@example.com');
  
      // Assert
      expect(result).toBeNull();
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'nonexistent@example.com' },
      });
    });
  });
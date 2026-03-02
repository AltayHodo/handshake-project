import request from 'supertest';
import { app, prisma } from './server.js';

describe('GET /index', () => {
  // Cleanup
  beforeAll(async () => {
    await prisma.student.deleteMany();
    await prisma.student.createMany({
      data: [
        {
          first_name: 'Test',
          last_name: 'User',
          check_in_time: new Date(),
        },
        {
          first_name: 'Jane',
          last_name: 'Doe',
          check_in_time: new Date(),
        },
      ],
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('should return an array of students', async () => {
    const response = await request(app).get('/index');
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('should return students with correct structure', async () => {
    const response = await request(app).get('/index');
    const student = response.body[0];

    expect(student).toHaveProperty('id');
    expect(student).toHaveProperty('first_name');
    expect(student).toHaveProperty('last_name');
    expect(student).toHaveProperty('check_in_time');
  });
});

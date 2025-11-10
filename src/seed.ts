import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('🌱 Seeding database...')

  try {
    // Check if test user exists
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: 'test@test.com',
        },
      },
    })

    if (existingUsers.docs.length === 0) {
      // Create test user
      const user = await payload.create({
        collection: 'users',
        data: {
          email: 'test@test.com',
          password: 'test',
          name: 'test',
        },
      })
      console.log('✅ Created test user: test@test.com / test')
      console.log('User ID:', user.id)
    } else {
      console.log('ℹ️ Test user already exists')
    }

    console.log('✨ Seeding complete!')
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }

  process.exit(0)
}

seed()

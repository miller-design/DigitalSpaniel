/* eslint-disable import/no-anonymous-default-export */
import { faker } from '@faker-js/faker'
import { NextResponse } from "next/server";

// export default async (req: any, res: any) => {

// 	const limit = JSON.parse(req.body)?.limit ?? 10;

// 	const testimonials = [...new Array(limit)].map((_, index) => {
//     return {
//       index,
//       firstName: faker.person.firstName(),
// 			lastName: faker.person.lastName(),
//       jobArea: faker.person.jobArea(),
// 			jobType: faker.person.jobType(),
// 			bio: faker.lorem.lines({ min: 1, max: 3 }),
// 			image: faker.image.avatar()
//     };
//   });

// 	return res.status(201).json({ message: `success` })
// }

// req = HTTP incoming message, res = HTTP server response
export async function GET(request) {
  // Do whatever you want
	const testimonials = [...new Array(5)].map((_, index) => {
		return {
			index,
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			jobArea: faker.person.jobArea(),
			jobType: faker.person.jobType(),
			bio: faker.lorem.lines({ min: 1, max: 3 }),
			image: faker.image.avatar()
		}
	})

  return NextResponse.json({ data: testimonials }, { status: 200 });
}
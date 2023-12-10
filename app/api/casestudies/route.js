/* eslint-disable import/no-anonymous-default-export */
import { faker } from '@faker-js/faker'
import { NextResponse } from "next/server";

export async function GET(request) {

	const testimonials = [...new Array(5)].map((_, index) => {
		return {
			title: faker.lorem.words({ min: 2, max: 4}),
			text: faker.lorem.words({ min: 10, max: 18 }),
			link: {
				title: 'Read More',
				target: '',
				url: '/#'
			},
			image: {
				src: faker.image.url({width: 800, height: 500}),
				alt: 'image alt text here',
				width: 800,
				height: 500
			}
		}
	})

  return NextResponse.json({ data: testimonials }, { status: 200 });
}
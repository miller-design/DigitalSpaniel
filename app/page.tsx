'use server'

import { HeroHeader } from '@/components/HeroHeader/HeroHeader'
import styles from './index.module.scss'
import { TextAndLinks } from '@/components/TextAndLinks/TextAndLinks'
import { CaseStudies } from '@/components/CaseStudies/CaseStudies'
import { headers } from "next/headers"

async function getData(file: string) {
	const host = headers().get("host");
	const protocal = process?.env.NODE_ENV === "development" ? "http" : "https"
	const url = `${protocal}://${host}/api/${file}`
	const res = await fetch(url)

  if (res.status != 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async () => {
	const caseStudyData = await getData('casestudies')

	const heroImage = {
		image: {
			src: '/Spaniel01_gradient@2x.png',
			alt: 'hero image alt tag'
		},
		width: 960,
		height: 1080,
		sizes: [50, 50, 100],
		priority: true,
		intrinsic: false
	}

	const servicesLinks = [
		{
			title: 'brand',
			links: [
				{
					title: 'Brand Strategy',
					url: '#',
					target: ''
				},
				{
					title: 'Logo & Name',
					url: '#',
					target: ''
				},
				{
					title: 'Identity & Collateral',
					url: '#',
					target: ''
				}
			]
		},
		{
			title: 'marketing',
			links: [
				{
					title: 'Digital',
					url: '#',
					target: ''
				},
				{
					title: 'Market Research',
					url: '#',
					target: ''
				},
			]
		},
		{
			title: 'development',
			links: [
				{
					title: 'eCommerce',
					url: '#',
					target: ''
				},
				{
					title: 'Web Development',
					url: '#',
					target: ''
				},
				{
					title: 'Mobile Apps',
					url: '#',
					target: ''
				}
			]
		}
	]

	return (
		<div className={styles.container}>
			<HeroHeader
				tags="BRAND, DEV, ECOM, MARKETING"
				title="We unleash <br /> business potential"
				text="We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance."
				link={{
					title: "Let’s talk",
					url: '#',
					target: ''
				}}
				image={heroImage}
			/>
			<TextAndLinks
				title="What are <br /> we capable of"
				text="By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement."
				link={{
					title: "Our Process",
					url: '#',
					target: ''
				}}
				links={servicesLinks}
			/>
			<CaseStudies
				title="Case Studies"
				text="Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business."
				slideData={caseStudyData.data}
			/>
		</div>
	)
}

export default Page
import { genPageMetadata } from 'app/seo'
import projectsData from '@/data/projectsData'
import Image from '@/components/Image'
import { Project } from '@/data/projectsData'
export const metadata = genPageMetadata({ title: 'clint`s projects' })

export default function Projects({ params }) {
  const data: Project | undefined = projectsData.find((el) => params?.id === el?.id)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            {data?.title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{data?.content}</p>
        </div>
        <div className="container py-12">
          {data?.imgNameList?.map((el) => (
            <div key={el} className="my-4 flex flex-wrap">
              <Image
                src={`/static/images/project/${el}.png`}
                width={1000}
                height={500}
                alt="Picture of the author"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

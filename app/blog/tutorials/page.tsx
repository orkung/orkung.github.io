import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { notFound } from 'next/navigation'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Tutorial Posts' })

export async function generateStaticParams() {
  const allPosts = allCoreContent(sortPosts(allBlogs))
  const posts = allPosts.filter((post) => post.path?.startsWith('blog/tutorials/'))
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }))
}

export default async function TutorialsPageNumber(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const pageNumber = parseInt(params.page as string)
  const allPosts = allCoreContent(sortPosts(allBlogs))
  const posts = allPosts.filter((post) => post.path?.startsWith('blog/tutorials/'))
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (pageNumber > totalPages) {
    return notFound()
  }

  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="Tutorial Posts"
    />
  )
}
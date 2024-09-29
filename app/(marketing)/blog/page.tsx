import Image from "next/image"
import Link from "next/link"
import { Button, CardActionArea, CardActions } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <section>
      <div
        className="relative flex h-[300px] flex-col items-center justify-center bg-cover bg-center sm:min-h-[200px] sm:px-4 md:min-h-[300px] lg:min-h-[400px]"
        style={{
          backgroundImage:
            'url("https://as1.ftcdn.net/v2/jpg/05/29/70/28/1000_F_529702804_iKEd9oFxq16K2egg7yLxC8FRMuEZaqMN.jpg")',
        }}
      >
        <b className="font-heading text-2xl leading-[1.1] text-gray-200 sm:text-3xl md:text-6xl">
          Blog
        </b>
        <p className="mt-40 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 lg:mt-3">
          Learn how to get started with reelSearch.
        </p>
      </div>

      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <div className="container grid w-full grid-cols-1 flex-col gap-7 py-3 transition-all duration-300 md:max-w-[64rem] md:grid-cols-2 md:py-12 lg:grid-cols-3 lg:py-12">
          {/* Blog Card  */}
          {posts?.length ? (
            <>
              {posts.map((post, index) => (
                <article key={post._id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      style={{ maxHeight: "140px" }}
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent
                      sx={{
                        minHeight: 150,
                      }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                      </Typography>
                      <Typography
                        style={{
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          overflow: "hidden",
                        }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {post.description}
                      </Typography>
                    </CardContent>
                    <CardActions className="mx-4">
                      <Link
                        href={post.slug}
                        className="ml-auto text-sm text-slate-600"
                      >
                        Read More
                      </Link>
                    </CardActions>
                  </Card>
                </article>
              ))}
            </>
          ) : (
            <p>No posts published.</p>
          )}
        </div>
      </div>
    </section>
  )
}

import { EvaluateHeader } from "@/assets";
import BlogSidebar from "@/components/BlogSidebar";
import { Icons } from "@/components/Icons";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { fetchPostBySlug, fetchPosts } from "@/sanity/lib/utisl";
import { Post } from "@/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Props) => {
  const post: Post = await fetchPostBySlug(params.slug);

  const recommendedPosts: Post[] = await fetchPosts({
    filterCondition: " && recommendations == true",
    limit: 3,
  });
  return (
    <>
      <PageBreadcrumbs
        title="Our Blog"
        description="Our Blog Explore a wide range of articles that cover everything from selling tips to investment strategies and market trends."
        image={urlForImage(post.mainImage).toString()}
      />
      <section className="section-paddings post-container">
        <div className="container">
          <h1 className="text-2xl lg:text-4xl font-bold text-black ">
            {post.title}
          </h1>
          <div className="mt-20 flex flex-col md:flex-row gap-10">
            <article className="prose lg:prose-xl max-w-full">
              <PortableText
                // @ts-ignore
                value={post.body}
              />
            </article>
            <BlogSidebar />
          </div>
        </div>
      </section>
      <section className="section-paddings ">
        <div className="container">
          <h3 className="text-black font-semibold">Recommended</h3>
          <p className="max-w-sm mt-2 text-sm">
            All the aspects you cherish from the conference compressed into a
            single-day virtual event.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-6">
            {recommendedPosts &&
              recommendedPosts.map((post, index) => (
                <Link href={`/blog/${post.slug.current}`} key={index}>
                  <div className="pb-[80%] w-full relative">
                    <Image
                      src={urlForImage(post.mainImage).toString()}
                      alt={post.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex mt-5 gap-2 text-xs  items-center font-semibold">
                    <p>
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(post.publishedAt))}
                    </p>
                    <Icons.folder size={16} className="text-primary" />
                    <p className="text-secondary ">{post.category?.title}</p>
                  </div>
                  <h3 className="text-primary mt-3 font-bold">{post.title}</h3>
                  <PortableText
                    // @ts-ignore
                    value={post.body.slice(1, 2)}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="line-clamp-2 text-xs mt-3 font-popins">
                            {children}
                          </p>
                        ),
                      },
                    }}
                  />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const category = formData.get("category") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as File;
  
  if (!title || !slug || !content) {
    return { error: "Title, Slug, and Content are required." };
  }

  try {
    let imageUrl = "";
    if (image && image.size > 0) {
      const buffer = Buffer.from(await image.arrayBuffer());
      const ext = path.extname(image.name);
      const fileName = `${slug}-${Date.now()}${ext}`;
      const imagePath = path.join(process.cwd(), "public", "blog", fileName);
      fs.writeFileSync(imagePath, buffer);
      imageUrl = `/blog/${fileName}`;
    }

    const markdownContent = matter.stringify(content, {
      title,
      date: new Date().toISOString().split("T")[0],
      excerpt,
      category,
      tags: [],
      ...(imageUrl && { coverImage: imageUrl })
    });

    const postPath = path.join(process.cwd(), "content", "blog", `${slug}.md`);
    fs.writeFileSync(postPath, markdownContent, "utf8");

    return { success: true, slug };
  } catch (error: any) {
    console.error(error);
    return { error: error.message || "Failed to create post" };
  }
}

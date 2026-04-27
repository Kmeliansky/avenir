import { gql } from 'graphql-request';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        title
        slug
      }
    }
  }
`;

// ── Blog types ────────────────────────────────────────────────────────────────

export type PostPreview = {
  title: string
  slug: string
  date: string
  excerpt: string
  featuredImage: { node: { sourceUrl: string; altText: string } } | null
  categories: { nodes: { name: string; slug: string }[] }
  author: { node: { name: string } } | null
}

export type PostFull = PostPreview & {
  content: string
}

export type Category = {
  name: string
  slug: string
  description: string | null
  count: number | null
}

export type GetPostsListResponse = {
  posts: {
    nodes: PostPreview[]
    pageInfo: { hasNextPage: boolean; endCursor: string }
  }
}

export type GetPostBySlugResponse = {
  post: PostFull | null
}

export type GetAllCategoriesResponse = {
  categories: {
    nodes: Pick<Category, 'name' | 'slug'>[]
  }
}

export type GetCategoryResponse = {
  category: Category | null
}

export type GetPostsByCategoryResponse = {
  posts: {
    nodes: PostPreview[]
    pageInfo: { hasNextPage: boolean; endCursor: string }
  }
}

// ── Blog queries ──────────────────────────────────────────────────────────────

export const GET_POSTS_LIST = gql`
  query GetPostsList($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      slug
      date
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      author {
        node {
          name
        }
      }
    }
  }
`;

// ── Category queries ──────────────────────────────────────────────────────────

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories(first: 20, where: { hideEmpty: true }) {
      nodes {
        name
        slug
      }
    }
  }
`;

export const GET_CATEGORY_BY_SLUG = gql`
  query GetCategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      name
      slug
      description
      count
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($slug: String!, $first: Int, $after: String) {
    posts(first: $first, after: $after, where: { categoryName: $slug }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

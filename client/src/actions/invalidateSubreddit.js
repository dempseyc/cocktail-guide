export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
​
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}
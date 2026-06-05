---
title: User Management and ACE Rules
featureTag: [Reference]
difficulty: Beginner
readingTime: 3 minutes
---

# User Management and ACE Rules

### What happens to ACE permission rules when a user is deleted?

When a user with ACE (Access Control Entry) rules applied is deleted, cleanup happens automatically:

1. **User's own ACEs are removed** — all rules with `ace_type='user'` belonging to that user
2. **Path references are deleted** — all ACEs pointing to `/users/{user_id}` paths (including group permissions referencing that user)
3. **No orphaned references** — no dangling ACE references remain after deletion

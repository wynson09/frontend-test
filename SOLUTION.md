SOLUTION
========

Estimation
----------
Estimated: 8 - 12 hours

Spent: 6 hours

Solution
--------
**Approach:**
I built this project using React and TypeScript to ensure type safety and maintainability. For state management, I chose Zustand because it's lightweight and easy to scale as the app grows. Tailwind CSS helped me quickly create a modern, responsive UI.

The app fetches products from the API and supports both pagination and filtering (by tag, price, and subscription). I made sure the pagination is dynamic, so users can choose how many items they want to see per page. My goal was to keep the interface clean, accessible, and easy to use.

**Key Features:**
- A product table that shows ID, Title, Price, Subscription, Subscription Discount and Tags.
- A sidebar with filters for tag (text), price (number), and subscription (dropdown).
- Pagination controls with page numbers, first/last/next/prev buttons, and a page size selector.
- Consistent row heights, even when there are fewer products than the page size.
- The total number of results is always visible above the table.
- All API calls use the correct query parameters and handle the total count for pagination.

**Extra Features Added (Beyond Requirements):**
- Users can select how many products to show per page (2, 5, 10, 12, 15, or 20).
- The table always looks tidy, even if there are empty rows.
- The total results count is displayed above the table (e.g., "Showing 5 of 12 results").
- Pagination controls are enhanced with first/last page buttons and a window of visible page numbers for a better experience.

**Edge Cases Handled:**
- If no products are found, the table clearly says so and keeps its structure.
- Changing any filter resets the pagination to page 1, so users don't get lost.
- Pagination controls are hidden if there's only one page of results.
- Empty table rows are rendered with consistent height for a polished look.

**Test Cases:**
1. Filter by Tag
   ```gherkin
   Given I am on the product collection page
   When I enter "Dog" in the tag filter
   Then I should see only products with the "Dog" tag in the table
   And the number of products should match the expected count
   ```
2. Filter by Price
   ```gherkin
   Given I am on the product collection page
   When I enter "30" in the price filter
   Then I should see only products with a price of 30
   And the table should show the correct number of products
   ```
3. Combined Filters (Subscription + Tag)
   ```gherkin
   Given I am on the product collection page
   When I select "Yes" for Subscription and enter "Cat" in the tag filter
   Then I should see only products that are subscribable and have the "Cat" tag
   And the table should show the correct number of products
   ```
4. Edge Case: No Results
   ```gherkin
   Given I am on the product collection page
   When I enter a tag that does not exist (e.g., "Bird")
   Then the table should display "No products found."
   ```

**How I would improve this further:**
- Add loading indicators and error messages for API calls.
- Write unit and integration tests for the main components and store logic.
- Make the filter sidebar collapsible on mobile for a better small-screen experience.
- Allow sorting by clicking on table headers.
  For a really smooth and flexible sorting experience, I'd suggest using something like [tanstack/table](https://tanstack.com/table) (formerly react-table)—it makes adding sorting and other table features much easier.
- Show product images and make product names clickable for more detail.
- Add a "Clear Filters" button for convenience.

**Time Management:**
I estimated 8 - 12 hours for this project and finished in about 6 hours, including coding, testing, and some extra polish.

**Notes:**
- All dependencies are listed in package.json.
- The code is modular and should be easy to extend or refactor.
- I aimed to follow best practices for accessibility and user experience.
- I intended to display product images, but due to issues with the image src_url in the mock data, I added the subscription discount column instead.
- Since there was no product with price 30 in the mock data, I assumed it is valid to modify the mock data (as allowed by instruction 5, which states can add, change, or modify any files in the project) and modify a product with price from 29.95 to 30 so the test case would match the requirements.
- When I tried to fork the repository, I got an error: "You do not have sufficient permissions to create repositories in this project/workspace." Instead, I cloned the repo and uploaded it to my personal GitHub repository.

If you have any questions or want to discuss my approach, I'm happy to chat!

Comments on your solution
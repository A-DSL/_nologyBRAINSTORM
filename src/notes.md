React front-end
Spring Java back-end
MySQL Database

Spring Java/MySQL will be deployed on Google Cloud. React will be deployed on Firebase. React will link to Spring Java by fetching from localhost, with the HTTP changing once the online deployment is made.

I want Brainstorm to be a very abstract utility app. The idea is that you come up with Idea Spaces, each with their own title and description. You can add any number of sub-ideas to an Idea Space, each with their own title and description too. That's all!

React will need:
-Two pages: IS List page (note this as public) and Idea Space page
-IS List page will need a navbar > searchbar, and ISList > ISListCard components.
-Idea Space page will need a navbar, pop-ups, an IS Card and a sub-IS Card component.

Java will need:
-PostMapping, PutMapping and DeleteMapping routes for creating/modifying/deleting ideas and sub-ideas; ideas on ISList page, and subideas on IdeaSpace page.
-GetMapping to display ISes on both pages.

MySQL will need:
-Two tables: One for ideas, and one for subideas. Subideas will be linked to ideas through a foreign spaceid key.
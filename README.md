# Bun Recipe

This project empowers you to generate creative and interesting recipes using the innovative combination of Bun, Hono, and Gemini AI.

## What it Does

* Leverages Bun: Bun, the lightning-fast JavaScript runtime, provides the foundation for efficient recipe generation.
* Utilizes Hono: Hono, the lightweight web framework built on Bun, ensures a seamless serverless experience for recipe delivery.
* Integrates Gemini AI: Gemini AI, a powerful large language model, fuels the recipe creation process, generating unique and flavorful ideas.

## Current Stage (Important):

* Opinionated Recipes: At this stage, the project focuses on generating recipes within a specific set of parameters (opinionated recipes). Future development will explore customization options for broader recipe creation.

## Getting Started

### Prerequisites:
- Bun (download from [https://bun.sh/](https://bun.sh/))
- Gemini API Key (for accessing AI capabilities)

1. Clone the Repository: 
   ```bash
   git clone https://github.com/kalwabed/bun-recipe.git
   ```
2. Obtain your Gemini API Key:

- Visit https://aistudio.google.com/app/apikey.
- Navigate to the "API Keys" section and create a new key.

3. Install Dependencies: 
   ```bash
   cd bun-recipe
   bun install
   ```

4. Run the Server: 
   ```bash
   bun run dev
   ```

This will start the Hono server, making the recipe generation functionality accessible.

## Usage

Navigate to `http://localhost:3000` in your web browser.

### Future Enhancements 

* Customizable Recipes: The project will evolve to provide more flexibility in recipe generation, allowing users to specify ingredients, dietary restrictions, and other preferences.
* Advanced AI Integration: Further integration with Gemini AI will explore advanced recipe generation techniques, such as incorporating specific cuisines or flavors.

## License 

This project is licensed under the MIT License. See the `LICENSE` file for details.

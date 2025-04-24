## Field Trip: Project Ideation

### Project Summary

This project is centered around the Mastodon Fossil Skeleton at the Indiana State Museum, one of Indiana’s most visually impressive and educational artifacts. Mastodons were massive Ice Age mammals related to modern elephants, and their fossilized remains provide insight into the natural history of the region.

The website will use multimedia, interactive elements, and educational games to help users learn about mastodon anatomy, excavation history, and Ice Age ecology. The topic was chosen because of its strong ties to Indiana’s prehistoric past and its potential for highly engaging educational experiences that blend technology and science.

### Core Webpages

1. **Home Page**
   - Introduction to the project and artifact.
   - Features a looping background video of mastodon excavation.
   - Includes a brief timeline and fun fact panel.

2. **Anatomy Explorer**
   - Interactive skeletal diagram with clickable bones.
   - Clicking a bone reveals descriptions, images, and facts.
   - Users can compare mastodon anatomy to modern elephants.

3. **Timeline of Discovery**
   - Scrollable timeline that highlights key discoveries.
   - Interactive map showing dig sites across Indiana.
   - Pop-up modals with historical photos and short dig site stories.

4. **Quiz & Trivia**
   - A short quiz to reinforce what users learned.
   - Displays immediate feedback and scoring.
   - Option to retake or share results.

5. **Dig Site Game (Optional Enhancement)**
   - A mini-game simulating a fossil excavation.
   - Players “brush” away dirt and uncover bone pieces.
   - Educational tips are revealed as bones are found.

### Design Choices

#### Visual and Stylistic Inspiration
- **Smithsonian Natural History Museum** – clean, educational structure.
- **Google Arts & Culture** – rich storytelling with layered visuals.
- **Natural History Museum of Los Angeles** – interactive displays and map-based storytelling.

#### Color Palette
- Earthy, natural tones to match the prehistoric theme:
  - `#6E5849` – Dark brown for headers and borders.
  - `#C7B299` – Soft tan for backgrounds.
  - `#F4F1EA` – Bone white for body sections.
  - `#3C5A14` – Forest green for interactive highlights.
  - `#B22222` – Rust red for quiz buttons and alerts.

#### Fonts
- **Titles**: `Merriweather` – serif, evokes tradition and history.
- **Body Text**: `Open Sans` – modern, readable, clean.

### Data Structure with Rationale

To support the site’s modular and interactive nature, we’ll use structured data (likely in JSON format) for both the anatomy explorer and the quiz.

#### 1. Anatomy Explorer Structure
Each bone on the skeleton is represented as a data object containing:
- An `id` to link with clickable zones in the UI.
- A `title` (e.g., “Tusk”).
- A `description` explaining the function and significance of the bone.
- An optional `image` for overlays or detailed diagrams.

This format allows dynamic content rendering. It also supports future expansion (e.g., adding sound clips or videos).

#### 2. Quiz Data Structure
Each quiz question is a separate object containing:
- A `question` string.
- A `choices` array of possible answers.
- A `correctAnswer` field used to check answers and provide feedback.

Using a structured format enables easy question updates, reordering, or even localizing into different languages later.

#### 3. Timeline and Map Data
The timeline and map rely on entries that include:
- A `date` or `period` for sorting events.
- A `location` (used for syncing to map markers).
- A `summary` for fast browsing.
- An optional `media` field (image or video links) for richer storytelling.

By organizing content like this, the entire site remains flexible, scalable, and maintainable — ideal for a growing educational platform.



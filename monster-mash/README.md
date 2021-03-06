## Project Name

Dr. Con Smash Monster Mash

https://the-monster-mash.netlify.app/

## Project Description

Aren't you just tired of fighting the same old Goblins over and over again? Enter Dr. Con Smash Monster Mash! (Patent Pending) With the push of a button, this magical machine refers to a horrible database of Spooky Monster Traits (Patent Pending) selects a handful of horrible results, and breathes new life (or un-life) into your run of the mill common monster, transforming them into a terrifying titan! (Deadliness results may vary, please contact your Court Wizard)

## Wireframes

https://www.figma.com/file/hRlZasJ6JfyarjSM5OqVvm/Con-Smash-Monster-Mash?node-id=2%3A3
Initial splash screen and monster creation page.
![Monster Mash Proof of Concept](https://i.imgur.com/BG9qB8v.png)
After mutating your monster, you can check out your creations and reference a list of creations.
![Monster Mash Proof of Concept 2](https://i.imgur.com/ZLwHt6z.png)
Tablet and Mobile versions of the app.
![Monster Mash Proof of Concept 3](https://i.imgur.com/27eTZZf.png)

## Component Hierarchy

Show your component hierarchy here! Use [this](https://cms-assets.tutsplus.com/uploads/users/1795/posts/30352/image/GettingStartedWithReduxTutorial-React-Component-Structure.png) as an example.
![Monster Mash Hierarchy](https://i.imgur.com/L2ppdz0.png)

## API and Data Sample

https://airtable.com/tbllSjukRV7CtgLlI/viwE3fqve4iIQeAWJ?blocks=hide
![Monster Mash Data Sample](https://i.imgur.com/5Q4UIWe.png)


let i = 1;
  const mutationLists = Object.entries(mutations).map(([stat, mutas]) => (
    <div key={i++} className="Mutation">
      <p className="Stat-text">{stat}</p>
      {props.roll[stat] && <p className="Mutation-text">{props.roll[stat].fields.Name}</p>}
      <Button
        mutas={mutas}
        stat={stat}
        setRoll={props.setRoll}
        randomRoll={props.randomRoll}
        getModifiedFields={getModifiedFields}
        setMonster={props.setMonster}
        monster={props.monster}
      />
    </div>
  ));
  return <div>{mutationLists}</div>;


### MVP/PostMVP

#### MVP

- Create and reference an Airtable for initial monster mutations.
- Create 6 different modifier buttons that affect the monsters initial stats.
- Store the monster mutation results and post them to Airtable.
- Create results page to house your monster mutation information.
- Post your creations to an additional Airtable table.

#### PostMVP

- More Complex Mutations
- Monster Index
- Add more monster bases (up from just Goblin)
- Animations for Monster Mutation Components
- Add more modifiers with more game component effects instead of just stats (advantage on attacks, free action disengaging etc.)
- Pick favorite monsters for easy reference

## Project Schedule

| Day    | Deliverable                                        | Status     |
| ------ | -------------------------------------------------- | ---------- |
| OCT 08 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| OCT 09 | Project Approval                                   | Complete   |
| OCT 12 | Core Application Structure (HTML, CSS, etc.)       | Complete   |
| OCT 13 | Pseudocode / actual code                           | Complete   |
| OCT 14 | Initial Clickable Model                            | Complete   |
| OCT 15 | MVP                                                | Complete   |
| OCT 16 | Presentations                                      | Incomplete |

## Timeframes

| Component                                                  | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating Base React App with Components, NPM, React Router |    H     |      1hr       |      1hr      |       1hr      |
| Implementing Airtable                                      |    H     |      3hrs      |     3hrs      |       3hrs      |
| Writing Specific Page Render Components                    |    H     |      8hrs      |     10hrs     |      10hrs       |
| Writing Monster Mutation Components                        |    H     |      8hrs      |     15hrs     |       20hrs      |
| Connecting Components to App.js                            |    H     |      6hrs      |     6hrs      |       6hrs      |
| Rendering Components                                       |    H     |      8hrs      |     8hrs      |       5hrs      |
| Troubleshooting Components                                 |    H     |      6hrs      |     12hrs      |      10hrs       |
| Adding Media Queries for Mobile/Tablet                     |    H     |      8hrs      |     2hrs      |       2hrs      |
| Troubleshooting CSS                                        |    M     |      6hrs      |     10hrs     |       10hrs      |
| Total                                                      |    -     |     54hrs      |     67hrs     |       67hrs      |

## SWOT Analysis

### Strengths:

-High expectations and quick to create fun ideas.

### Weaknesses:

-Doesnt know the best method of asking questions for better understanding of react concepts.

### Opportunities:

-Creative muscles flex when coming up with interesting project ideas.

### Threats:

-Not having a clear direction for tackling more complex project goals.

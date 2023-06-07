# Art-Lab-FrontEnd

<br>

## Description

E-comerce web App developed with MERN Stack.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anonymous user I can sign up on the platform so that I can start creating and managing tournaments.
- **Login:** As a user I can login to the platform so that I can access my profile and start creating and managing tournaments.
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of tournaments I have created.
- **Add Tournaments:** As a logged in user I can access the add tournament page so that I can create a new tournament.
- **Edit Tournaments:** As a logged in user I can access the edit tournament page so that I can edit the tournament I created.
- **Add Players:** As a user I can add players to a tournament.
- **View Tournament Table:** As a user I want to see the tournament details, players list and the time table.
- **View Ranks:** As a user I can see the rankings list for the tournament.

## Backlog

[Trello board](https://trello.com/b/gsfCJxnv)

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                             | Component        | Permissions                       | Behavior                                          |
| -------------------------------- | ---------------- | --------------------------------- | ------------------------------------------------- |
| `/login`                         | LoginPage        | anon only `<AnonRoute>`           | Login form, navigates to home page after login.   |
| `/signup`                        | SignupPage       | anon only `<AnonRoute>`           | Signup form, navigates to home page after signup. |
| `/`                              | HomePage         | public                            |
| `/user-profile/artist/:artistId` | Artist Page      | anon only `<AnonRoute>`           | Home page.                                        |
| `/user-profile/:userId`          | ProfilePage      | user only `<PrivateRoute>`        | User and player profile for the current user.     |
| `/user-profile/:userId/edit`     | EditProfilePage  | user only `<PrivateRoute>`        | Edit user profile form.                           |
| `/addArt`                        | Add Artwork      | user-artist only `<PrivateRoute>` | User-artist adds an artwork.                      |
| `/artworks`                      | List of artworks | anon only `<AnonRoute>`           | List of artworks.                                 |
| `/artworks/:artworkdId`          | Artwork Details  | anon only `<AnonRoute>`           | Artwork details. Show possibility to add to cart  |
| `/cart/userId`                   | Cart             | user only `<PrivateRoute>`        | Added to cart elements.                           |

## Components

Pages:

- Login Page
- Signin Page
- Home Page
- Profile Page
- Artist Page
- Artworks
- Artwork Details
- Shopping cart
- Payment method(?)

Components:

- Navbar
- Art Piece Card
- Footer

## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
      `userData = {username, email, password, favouriteIllustrations}`
    - `.getCurrentUser()`

- **Illustration Service**

  - `IllustrationService` :
    - `.addIllustration(illustrationData)`
    - `.getIllustrations()`
    - `.getIllustration(id)`
    - `.deleteIllustration(id)`

- **User Cart Service**

  - `UserCartService` :
    - `.addToCart(id)`
    - `.removeFromCart(id)`

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  username: {
  type: String,
  unique: true,
  required: [true, "username is required."],
  
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required."],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  }
}
```

**Illustration model**

```javascript
{
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
    },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  }
}
```

**Shopping Cart model**

```javascript
{
  owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
  },
  items: [
      {
          type: Schema.Types.ObjectId,
          ref: "Illustration",
      }
  ],
}
```

**Payment model**

```javascript
{
  userBuying: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  items: [
    {
    type: Schema.Types.ObjectId,
    ref: "Illustration",
    }
  ],
  itemsAuthors: [
    {
    type: Schema.Types.ObjectId,
    ref: "User",
    }
  ],
  totalPrice: {
    type: Number,
  }
},
{
  timestamps: true,
}
```

<br>


## API Endpoints (backend routes)

| HTTP Method | URL                       | Request Body                | Description         |
| ----------- | ------------------------- | --------------------------- | ------------------- |
| GET         | `/test`                   | test route                  | just a test route   |
|AUTHENTICATION|-|-|-|
| GET         | `/auth/profile`           |                             | show user info      |
| POST        | `/auth/signup`            | {username, email, password} | sign up             |
| POST        | `/auth/login`             | {email, password}           | login in            |
|ILLUSTRATIONS|-|-|-|
| GET         | `/api/illustration`       |                             | Show tournaments    |
| GET         | `/api/illustration/:id`   |                             | Show specific Art   |
| GET         | `/api/illustration/owner/:ownerid`|                     | Show Art of user    |
| POST        | `/api/illustration`       |                             | Create new Art      |
| POST        | `/api/illustration/upload`|                             | upload image Art    |
| PUT         | `/api/illustration`       |                             | edit Art            |
|USER|-|-|-|
| GET         | `/api/user-profile/:id`   |                             | show User info      |
| PUT         | `/api/user-profile/:id`   |                             | edit User info      |
| DEL         | `/api/user-profile/:id`   |                             | delete User info    |
|PAYMENTS|-|-|-|
| GET         | `/api/:userid/cart`       |                             | show cart info      |
| POST        | `/api/:userid/cart`       |                             | edit cart info      |

<br>

## API's
├── Add API <br>
└── or API's <br>

<br>

## Packages
### BackEnd
├── bcrypt <br>
├── cookie-parser <br>
├── cors <br>
├── dotenv <br>
├── express-jwt <br>
├── express <br>
├── jsonwebtoken <br>
├── mongoose <br>
├── morgan <br>
└── nodemon <br>
<br>

## Links
[Canva board](https://www.canva.com/design/DAFkYojjrio/3zcG87puCq2Kzyr5adZriw/edit?utm_source=shareButton&utm_medium=email&utm_campaign=designshare)

[Git Repo Front-end](https://github.com/Marisa-Pinheiro/Art-Lab-FrontEnd)

[Git Repo Back-end](https://github.com/Marisa-Pinheiro/Art-Lab-Backend)

[Deploy Link]()

[Presentation!]()

<br>

## Contributors
**Marisa Pinheiro** <br>
[`LinkedIn Profile`](https://www.linkedin.com/in/marisa-pinheiro-833a12113/) <br>
[`Git Profile`](https://github.com/Marisa-Pinheiro) <br>

**Pedro Nogueira** <br>
[`LinkedIn Profile`](https://www.linkedin.com/in/pedro-nogueira-924851249/) <br>
[`Git Profile`](https://github.com/Pedro-No) <br>
```

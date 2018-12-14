# Random Magic

A web app intended to provide random item generation for 5the edition dungons and dragons. The app will randomly generate any of the offical item content as well as procediraly generated items.

Vue.js front end with an Express backend utalizing the Sequelize ORM to allow for any SQL database

## Progress

- [ ] Front End Funtionality

  - [x] User Functionality
    - [x] User Registration
    - [x] User Login
  - [ ] Item Functionality
  - [ ] Search Functionality

- [ ] Front End Display

  - [ ] User Profile
  - [ ] Mob Search Panel
  - [ ] Rarity Panel
  - [ ] Item Search Panel
  - [ ] Item Display PanelS

- [ ] Back End Funtionality

  - [x] User validation
  - [x] User routes
    - [x] User Resgistration
    - [x] User Login
  - [ ] Item search Logic
  - [ ] Ofiical Item routes
    - [ ] Create Item
    - [ ] Update Item
    - [ ] Get all Items
    - [ ] Get Item by query string
  - [ ] Procederial Item routes
    - [ ] Create Item
    - [ ] Update Item
    - [ ] Get all Items
    - [ ] Get Item by query string

- [ ] Database setup

  - [ ] Models setup
  - [ ] Associations setup
  - [x] User Seed
  - [ ] Item Seed
  - [ ] Effect Seed

## Project dev setup

```
npm install
```

If you want to use an actual SQL database instead of Sqlite be sure to update the config file

### Tools and dependancies

| Server         | Client  |
| -------------- | ------- |
| Bcrypt-nodejs  | Axios   |
| Bluebird       | Vue     |
| Body-parser    | Vuetify |
| Cors           |
| Express        |
| Json Web Token |
| Sequelize      |
| Sqlite         |
| Volleyball     |

### Compiles and hot-reloads for development

Client

```
npm run serve
```

Server

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

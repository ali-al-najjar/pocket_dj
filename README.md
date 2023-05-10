<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> A mobile app that mixes songs based on the user's mood.
>
> Pocket DJAI aims to produce a continuous flow of songs mixed based on Mood, Camelot ,Beat and Danceability.

### User Stories
- As a user I want to register so that I have an account on the website.
- As a user I want to log in so that i can benefit from playing the full songs.
- As a user I want to choose the genre and the mood of the songs so that I can listen to what I want.
- As a user I want to be able to save the remixes generated so that I can use them in the future.
- As a user I want to be able to play, stop and pause the songs so that I can control the flow.
- As a user I want to be able to search songs and artists so that I can pick any song / artist I want.
- As an artist I want to upload songs so that I can add my songs to my profile.
- As an artist I want to have a profile so I can link my social media platforms.
- As an artist I want to be able to view all my songs so that I can edit them.
- As an admin I want to upload songs so that I can add to the songs library.
- As an admin I want to approve songs uploaded by the artists so that I can manage the data on the app.
- As an admin I want to view all the songs uploaded so that I can monitor my data.
- As an admin I want to view all the users so that I can monitor my registered users.

<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We designed Pocket DJAI using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

### Mockups
| Home screen  | Menu Screen | Order Screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the Pocket DJAI app with the following features:

### User Screens (Mobile)
| Login screen  | Register screen | Landing screen | Loading screen |
| ---| ---| ---| ---|
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |
| Home screen  | Menu Screen | Order Screen | Checkout Screen |
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |

### Artist Screens (Web)
| Login screen  | Register screen |  Upload Song screen | Edit Profile screen
| ---| ---| ---| ---|
| ![Landing](./readme/demo/ArtistLandingpage.png) | ![fsdaf](./readme/demo/ArtistRegisterpage.png) | ![fsdaf](./readme/demo/ArtistUploadSong.png) | ![fsdaf](./readme/demo/ArtistProfile.png) |


### Admin Screens (Web)
| Login screen  | View All Users screen |  View all Artists screen | View all Songs screen | Upload Mood screen | Upload Song screen
| ---| ---| ---| ---| ---| ---|
| ![Landing](./readme/demo/AdminLandingpage.png) | ![fsdaf](./readme/demo/admin-allusers.png) | ![fsdaf](./readme/demo/admin-allartists.png) | ![fsdaf](./readme/demo/admin-allsongs.png) | ![fsdaf](./readme/demo/adminUploadMood.png) | ![fsdaf](./readme/demo/adminUploadSong.png) |
<!-- | Home screen  | Menu Screen | Order Screen |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | -->

<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

###  Pocket DJAI is built using the following technologies:

- This project uses the [React Native app development framework](https://reactnative.dev/). React Native is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [MySQL](https://www.mysql.com/) package which allows the app to create a custom storage schema and save it to a local database.
- To create the mixes, the app uses [Django](https://www.djangoproject.com/) framework in integration with [Pydub](https://pydub.com/) which is an audio library, to generate the mix.
- The app uses the font [Urbanist](https://fonts.google.com/specimen/Urbanist) as its main font, and the design of the app adheres to the material design guidelines.
- The images of the Moods available on the app were generated using [DeepAI](https://deepai.org/machine-learning-model/text2img).
- The app is integrated with [Spotify API](https://developer.spotify.com/documentation/web-api) to retreive songs details. 

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up Pocket DJAI locally, follow these steps:

### Installation

1. Get a free API Key at [Spotify API](https://developer.spotify.com/documentation/web-api)
2. Clone the repo
   ```sh
   git clone https://github.com/aliynajjar/pocket_dj.git
   ```
3. Frontend: Open a command prompt and navigate inside pocketdj_frontend folder to install NPM packages
   ```sh
   npm install
   ```
   Create a `.env` file inside the folder
   Enter your Spotify keys and your server url
   ```js
   REACT_APP_CLIENT_KEY= 'Enter your client key'
   REACT_APP_CLIENT_SECRET = 'Enter your secret key'
   REACT_APP_API_URL = 'Enter your URL'
   ```
4. Mobile: Open a command prompt and navigate inside pocketDJ_mobile folder to install NPM packages
   ```sh
   npm install
   ```
5. Backend: Open a command prompt and navigate inside pocketDJ_server folder to install Django packages 
   ```sh
   pip install -r requirements.txt
   ```
   Create a `.env` file inside the folder
   Enter your database credentials
   ```js
      DATABASE_ENGINE=django.db.backends.mysql
      DATABASE_NAME='database_name'
      DATABASE_USER='database_username'
      DATABASE_PASSWORD='database_password'
      DATABASE_HOST='127.0.0.1' #for local environment
      DATABASE_PORT='database_port'

      BASE_URL='your base url' 
      SECRET_KEY = 'you django secret keye'
   ```
   To generate a django secret key.
   ```python
      python
      from django.core.management.utils import get_random_secret_key
      print(get_random_secret_key())
   ```
   To prepare the database:
   ```python
      python manage.py makemigrations
      python manage.py migrate

### Initialization
1. Frontend: Inside the pocketdj_frontend folder
   ```npm
   npm start
   ```
2. Mobile: Inside the pocketDJ_mobile folder
   ```npm
   npx expo start
   ```
3. Backend: Inside the pocketDJ_server folder
   ```python
   python manage.py runserver
   ```
Now, you should be able to run Pocket DJAI locally and explore its features.
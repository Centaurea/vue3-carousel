# vue3-carousel

carousel for vue 3

## Installation
```
npm install @centaurea/vue3-carousel
```

## Get started

```javascript
import VueCarousel from '@centaurea/vue3-carousel';

app.use(VueCarousel)
```

## Example

```html
  <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
    <slide>
      Slide 1 Content
    </slide>
    <slide>
      Slide 2 Content
    </slide>
  </carousel>
```

```html
    <carousel class="carousel__fullscreen"
                          :per-page="1" :speed="fullScreenTransitionSpeed"
                          :navigation-enabled="false"
                          :pagination-enabled="false"
                          :navigate-to="currentLarge" :scroll-per-page="false">
        <slide v-if="video" class="carousel__slide carousel__slide_video" v-on:slide-click="showFullscreen">
                Content
        </slide>
        <slide v-for="(photo, index) in photos" :key="photo.id" class="carousel__slide carousel__fullscreen-slide">
                Content
        </slide>
    </carousel>
```

## LICENSE
MIT
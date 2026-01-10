<template>
  <div class="w-full h-full map-container">
    <l-map
      ref="map"
      :zoom="3"
      :center="[20, 0]"
      :use-global-leaflet="false"
      :options="mapOptions"
      class="w-full h-full"
    >
      <l-tile-layer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
        layer-type="base"
      />

      <l-marker
        v-for="trip in trips"
        :key="trip.id"
        :lat-lng="trip.coordinates"
      >
        <l-icon
          :icon-size="[32, 32]"
          :icon-anchor="[16, 32]"
        >
          <div class="marker-icon">
            <i class="fas fa-map-marker-alt text-3xl text-neon-cyan drop-shadow-[0_0_10px_rgba(0,224,255,0.8)] hover:text-matrix-green transition-colors duration-300"></i>
          </div>
        </l-icon>

        <l-tooltip :options="{ direction: 'top', offset: [0, -30] }">
          <div class="trip-tooltip">
            <img
              :src="trip.thumbnailUrl"
              :alt="trip.name"
              class="tooltip-image"
            />
            <div class="tooltip-content">
              <p class="tooltip-name">{{ trip.name }}</p>
              <p class="tooltip-country">{{ trip.country }}</p>
            </div>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from '@vue-leaflet/vue-leaflet'
import type { TripLocation } from '~/types'

interface Props {
  trips: TripLocation[]
}

defineProps<Props>()

const mapOptions = {
  zoomControl: false,
  attributionControl: true,
  scrollWheelZoom: true,
  doubleClickZoom: true,
  dragging: true
}

// TODO: Reabilitar navegação quando o conteúdo estiver pronto
// const handleMarkerClick = (trip: TripLocation) => {
//   const router = useRouter()
//   router.push(`/trips/${trip.slug}`)
// }
</script>

<style scoped>
.map-container {
  position: relative;
}

/* Filtro neon cyberpunk para o mapa */
:deep(.leaflet-tile-pane) {
  filter:
    invert(1)
    hue-rotate(200deg)
    saturate(2)
    brightness(1.3)
    contrast(1.1);
}

.marker-icon {
  cursor: pointer;
}

.trip-tooltip {
  padding: 0;
  background: transparent;
  border: 1px solid rgba(0, 224, 255, 0.3);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 224, 255, 0.3);
  width: 150px;
}

.tooltip-image {
  display: block;
  width: 150px;
  height: 100px;
  min-width: 150px;
  min-height: 100px;
  max-width: 150px;
  max-height: 100px;
  object-fit: cover;
  object-position: center;
}

.tooltip-content {
  padding: 0.5rem;
  background: rgba(10, 14, 39, 0.95);
}

.tooltip-name {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.875rem;
  color: #00E0FF;
  font-weight: 600;
  margin: 0;
}

.tooltip-country {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0;
}

:deep(.leaflet-tooltip) {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}

:deep(.leaflet-tooltip::before) {
  display: none !important;
}

:deep(.leaflet-marker-icon) {
  background: transparent !important;
  border: none !important;
}

:deep(.leaflet-div-icon) {
  background: transparent !important;
  border: none !important;
}
</style>

<template>
    <div>
        <div v-if="isMobile" class="mobile-navbar">
            <v-toolbar dark>
                <v-btn icon class="hamburger-btn" @click="mobileDrawer = !mobileDrawer">
                    <i class="fa-solid fa-bars m-0"></i>
                </v-btn>
            </v-toolbar>

            <v-navigation-drawer v-model="mobileDrawer" temporary location="left" class="mobile-drawer"
                image="https://img.freepik.com/free-photo/beautiful-skyscape-daytime_23-2149265586.jpg" theme="dark">
                <template v-slot:prepend>
                    <h2 class="mt-3 ms-4 mb-0">Módulo 6</h2>
                    <v-list-item title="Desarrollo de Interfaces Interactivas con Framework Vue"
                        subtitle="Actividades Prácticas" class="no-truncate"></v-list-item>
                </template>

                <v-divider></v-divider>

                <v-list nav dense>
                    <v-list-item value="home" 
                    :class="{'nav-active': $route.name === 'home'}"
                    @click="$router.push('/')">
                        <div class="nav-item-content">
                            <i class="fas fa-home me-3"></i>
                            <span class="nav-item-text">Home</span>
                        </div>
                    </v-list-item>
                    <v-list-item value="abp1" 
                    :class="{'nav-active': $route.name === 'abp1'}"
                    @click="$router.push('/abp1')">
                        <div class="nav-item-content">
                            <i class="fas fa-paper-plane me-3"></i>
                            <span class="nav-item-text">ABP1</span>
                        </div>
                    </v-list-item>
                    <v-list-item value="abp2"
                    :class="{'nav-active': $route.name === 'abp2'}"
                    @click="$router.push('/abp2')">
                        <div class="nav-item-content">
                            <i class="fas fa-paper-plane me-3"></i>
                            <span class="nav-item-text">ABP2</span>
                        </div>
                    </v-list-item>
                    <v-list-item value="abp3"
                    :class="{'nav-active': $route.name === 'abp3'}"
                    @click="$router.push('/abp3')">
                        <div class="nav-item-content">
                            <i class="fas fa-paper-plane me-3"></i>
                            <span class="nav-item-text">ABP3</span>
                        </div>
                    </v-list-item>
                </v-list>
                <template v-slot:append>
                    <v-divider></v-divider>
                    <v-col class="text-center py-0">
                        <v-btn color="white" variant="flat" class="rounded-circle mr-4" icon>
                            <a href="https://www.instagram.com/korolahernz/" class="social-icon" target="_blank">
                                <i class="fab fa-instagram fa-lg"></i></a>
                        </v-btn>
                        <v-btn color="white" variant="flat" class="mr-4 rounded-pill" icon><a
                                href="https://github.com/CaroHernz/" class="social-icon" target="_blank">
                                <i class="fa-brands fa-github fa-lg"></i>
                            </a></v-btn>
                        <v-btn color="white" variant="flat" icon><a
                                href="https://www.linkedin.com/in/carolinahernandezbarra/" class="social-icon"
                                target="_blank">
                                <i class="fab fa-linkedin-in fa-lg"></i>
                            </a></v-btn>
                    </v-col>
                    <v-col class="text-center pt-1">
                        <small>© 2025 Carolina Hernández Barra</small>
                    </v-col>
                </template>
            </v-navigation-drawer>
        </div>
        <v-navigation-drawer v-if="!isMobile" :image="drawerImage" theme="dark" permanent
            :class="['custom-drawer', { 'collapsed-drawer': isCollapsed }]">
            <template v-slot:prepend>
                <h2 class="mt-3 ms-4 mb-0" :class="{ 'd-none': isCollapsed }">Módulo 6</h2>
                <v-list-item title="Desarrollo de Interfaces Interactivas con Framework Vue"
                    subtitle="Actividades Prácticas" class="no-truncate"
                    :class="{ 'd-none': isCollapsed }"></v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list nav dense :class="{ 'collapsed': isCollapsed }">
                <v-list-item value="home" 
                    :class="{'nav-active': $route.name === 'home'}"
                    @click="$router.push('/')">
                        <div class="nav-item-content">
                            <i class="fas fa-home me-3"></i>
                            <span class="nav-item-text">Home</span>
                        </div>
                    </v-list-item>
                <v-list-item value="abp1"
                :class="{'nav-active': $route.name === 'abp1'}"
                    @click="$router.push('/abp1')">
                    <div class="nav-item-content">
                        <i class="fas fa-paper-plane me-3"></i>
                        <span class="nav-item-text">ABP1</span>
                    </div>
                </v-list-item>
                <v-list-item value="abp2"
                :class="{'nav-active': $route.name === 'abp2'}"
                    @click="$router.push('/abp2')">
                    <div class="nav-item-content">
                        <i class="fas fa-paper-plane me-3"></i>
                        <span class="nav-item-text">ABP2</span>
                    </div>
                </v-list-item>
                <v-list-item value="abp3"
                :class="{'nav-active': $route.name === 'abp3'}"
                    @click="$router.push('/abp3')">
                    <div class="nav-item-content">
                        <i class="fas fa-paper-plane me-3"></i>
                        <span class="nav-item-text">ABP3</span>
                    </div>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <template v-slot:append>
                <v-divider></v-divider>
                <v-col class="text-center py-0">
                    <v-btn color="white" variant="flat" class="rounded-circle mr-4" icon>
                        <a href="https://www.instagram.com/korolahernz/" class="social-icon" target="_blank">
                            <i class="fab fa-instagram fa-lg"></i></a>
                    </v-btn>
                    <v-btn color="white" variant="flat" class="mr-4 rounded-pill" icon><a
                            href="https://github.com/CaroHernz/" class="social-icon" target="_blank">
                            <i class="fa-brands fa-github fa-lg"></i>
                        </a></v-btn>
                    <v-btn color="white" variant="flat" icon><a
                            href="https://www.linkedin.com/in/carolinahernandezbarra/" class="social-icon"
                            target="_blank">
                            <i class="fab fa-linkedin-in fa-lg"></i>
                        </a></v-btn>
                </v-col>
                <v-col class="text-center pt-1">
                    <small>© 2025 Carolina Hernández Barra</small>
                </v-col>
            </template>
        </v-navigation-drawer>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

import { ref, onMounted, onUnmounted, computed } from 'vue';

const isCollapsed = ref(false);
const mobileDrawer = ref(false);
const windowWidth = ref(window.innerWidth);

// Actualizar el ancho de la ventana cuando cambie el tamaño
const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});

// Computed properties
const isMobile = computed(() => windowWidth.value < 800);
const drawerImage = computed(() =>
    isCollapsed.value ? '' : 'https://img.freepik.com/free-photo/beautiful-skyscape-daytime_23-2149265586.jpg'
);
</script>
<style scoped>
.custom-drawer {
    width: 300px !important;
    transition: width 0.3s ease;

}
.collapsed-drawer {
    width: 60px !important;
}

.no-truncate :deep(.v-list-item-title) {
    white-space: normal !important;
    overflow: visible !important;
    text-overflow: unset !important;
}

.hamburger-btn {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 100;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2196F3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
}

.hamburger-btn i {
    color: white;
    font-size: 24px;
}

.nav-item-content {
    display: flex;
    align-items: center;
}

.nav-item-text {
    margin-left: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.collapsed .nav-item-text {
    display: none;
}

.d-none {
    display: none !important;
}

.mobile-drawer {
    z-index: 999;
}
</style>
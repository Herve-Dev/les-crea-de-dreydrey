<template>
    <nav class="navbar"> 
        <ul class="navbar__list"> 
            <div class="navbar__center">
                <li class="navbar__item">  
                <NuxtLink to="/" class="navbar__link">Accueil</NuxtLink>  
                </li>
                <li class="navbar__item">
                    <NuxtLink to="/" class="navbar__link">Catégorie</NuxtLink>
                </li>
                <li class="navbar__item">
                    <NuxtLink to="/contact" class="navbar__link">Contact</NuxtLink>
                </li>
            </div> 
            
            <!-- Ajouter quand backend fait -->
            <!-- <div class="navbar__right">
                <li class="navbar__item">
                    <NuxtLink to="/contact" class="navbar__link">Connexion</NuxtLink>
                </li>
                <li class="navbar__item">
                    <NuxtLink to="/contact" class="navbar__link">S'enregister</NuxtLink>
                </li>
            </div> -->
        </ul>
    </nav>
</template>
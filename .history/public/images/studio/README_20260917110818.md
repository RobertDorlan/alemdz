# Imágenes del estudio

## Fotografía panorámica principal (hero)

Coloca aquí la fotografía real horizontal del estudio, reemplazando la
imagen provisional:

```
public/images/studio/alemdz-studio-hero.jpg
```

Recomendaciones:

- Orientación **horizontal / panorámica**.
- Resolución alta para pantallas grandes (mínimo ~2400 px de ancho).
- El punto focal importante debe quedar hacia el centro vertical
  (el CSS usa `object-position: center 40%`; ajústalo en
  `styles.css` → `.studio-hero__img` si el encuadre lo requiere).
- La imagen se muestra con `object-fit: cover`, ancho completo,
  sin bordes redondeados y sin tarjeta.

# Imágenes de los círculos (menú visual)

Coloca aquí una fotografía, ilustración o textura para cada categoría.
Los nombres de archivo deben coincidir exactamente con los siguientes
(referenciados desde `index.html` y `styles.css`):

```
public/images/circles/mi-historia.jpg
public/images/circles/tips-de-belleza.jpg
public/images/circles/tricologia.jpg
public/images/circles/servicios-y-precios.jpg
public/images/circles/bookings.jpg
```

Recomendaciones:

- Preferiblemente **cuadradas** (se recortan en círculo con
  `border-radius: 50%` y `background-size: cover`).
- Resolución mínima sugerida: ~600 × 600 px.
- Mientras no existan las imágenes, se muestra un degradado de
  reserva definido en `styles.css` (`.circle__media`).
- Sobre cada imagen hay un velo (`.circle__overlay`) que garantiza
  el contraste y la legibilidad del texto; ajústalo si tus fotos son
  muy claras u oscuras.

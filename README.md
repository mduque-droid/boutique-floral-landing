# Boutique Floral — Landing Page

Landing de conversión (WhatsApp + llamadas) para Boutique Floral, floristería en
Medellín y Oriente Antioqueño. Next.js 14 (App Router) + Tailwind CSS + framer-motion
+ lucide-react.

## Ejecutar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## ✏️ Dónde editar los datos

**Todo el contenido está en un solo archivo:** [`config/site.js`](./config/site.js)

- `site.whatsapp` → número de WhatsApp (solo dígitos, formato internacional, ej. `573001234567`).
- `site.phoneDisplay` / `site.phoneTel` → teléfono mostrado y enlace `tel:`.
- `site.email` → correo del footer.
- `bouquets` → catálogo de ramos (nombre, categoría, descripción, precio, imagen).
- `testimonials` → clientes felices.
- `faqs` → preguntas frecuentes.

> Busca los comentarios `// TODO:` para ver qué falta reemplazar.

## 🖼️ Imágenes y videos (Cloudinary)

Las imágenes actuales son **placeholders de Unsplash**. Para producción:

1. Crea una cuenta gratis en [cloudinary.com](https://cloudinary.com).
2. Sube las fotos (convertidas de HEIC a JPG/WEBP) y videos (MOV → MP4).
3. Reemplaza los campos `image:` en `config/site.js` por las URLs de Cloudinary.
4. `res.cloudinary.com` ya está permitido en `next.config.mjs`.

## 🔗 Cómo funcionan los enlaces de WhatsApp

En [`lib/whatsapp.js`](./lib/whatsapp.js). Generan URLs `wa.me` con mensajes dinámicos
codificados con `encodeURIComponent`. Al pedir un ramo, el mensaje incluye el nombre,
precio y campos para ciudad, fecha y tarjeta.

## 🎨 Paleta (en `tailwind.config.js`)

| Token | Color | Uso |
|-------|-------|-----|
| `sage` | `#3A5A40` | Primario (verde eucalipto) |
| `ivory` | `#FAFAF9` | Fondo marfil |
| `blush` | `#F4E2DE` | Secundario rosa rubor |
| `wa` | `#25D366` | CTA WhatsApp |
| `gold` | `#D4AF37` | Acento dorado |

## 🚀 Deploy

Recomendado **Vercel**: importa el repo y despliega. Cero configuración.

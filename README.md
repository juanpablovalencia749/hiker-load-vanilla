# Hiker Load Vanilla

Hiker Load Vanilla es una aplicación web desarrollada en JavaScript puro (Vanilla JS) que permite a los usuarios gestionar una lista de elementos con restricciones de peso y calorías. La aplicación está diseñada para ayudar a los excursionistas a planificar su carga de manera eficiente.

## Características

- **Gestión de elementos seleccionados:** Los usuarios pueden seleccionar y deseleccionar elementos de una lista.
- **Cálculo dinámico:** Calcula el peso total y las calorías de los elementos seleccionados.
- **Validación:** Verifica si los elementos seleccionados cumplen con los límites de peso y calorías establecidos.
- **Interfaz dinámica:** Actualiza la interfaz de usuario en tiempo real con mensajes claros sobre el estado de los elementos seleccionados.

## Instalación y Configuración

### Recomendaciones para usar `nvm` (Node Version Manager)

Es recomendable instalar `nvm` para gestionar múltiples versiones de Node.js en tu sistema sin problemas. Esto es útil para garantizar la compatibilidad del proyecto con versiones específicas de Node.js.

#### Instalación de `nvm`

- **En Windows:**
  Puedes instalar `nvm` en Windows siguiendo este tutorial:
  [Tutorial de instalación en Windows](https://www.youtube.com/watch?v=nyiJ1PZhBuY&t=61s&ab_channel=HolaDevs)

- **En Linux o macOS:**
  Sigue este tutorial para instalar `nvm` en sistemas basados en Unix:
  [Tutorial de instalación en Linux/macOS](https://www.youtube.com/watch?v=2K8MwrRc_Lc&ab_channel=HolaDevs)

#### Uso de `nvm`

1. **Instalar la versión recomendada de Node.js:**
   Una vez que tengas `nvm` instalado, puedes instalar la versión recomendada para este proyecto (por ejemplo, `22.12.0`) ejecutando:

   ```bash
   nvm install 22.12.0
   ```

2. **Usar la versión instalada:**
   Para activar la versión instalada, ejecuta:

   ```bash
   nvm use 22.12.0
   ```

3. **Verificar la versión activa de Node.js:**
   Confirma que estás usando la versión correcta con:
   ```bash
   node -v
   ```

Si no deseas usar `nvm`, asegúrate de tener instalada una versión reciente de Node.js (22.12.0 o similar) desde la [página oficial de Node.js](https://nodejs.org/).

---

Continúa con los pasos de instalación del proyecto una vez que tengas configurada la versión correcta de Node.js.

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/juanpablovalencia749/hiker-load-vanilla.git
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

4. **Abrir el proyecto:**
   - La aplicación se ejecutará en `http://localhost:{PORT}/` por defecto.
   - Si deseas cambiar el puerto, revisa la configuración en `package.json`.

## Estructura del Proyecto

El proyecto está organizado de manera modular para facilitar la escalabilidad y el mantenimiento. A continuación, se describe la estructura principal:

```
hiker-load-vanilla/
├── src/
│   ├── components/        # Componentes reutilizables relacionados con la UI
│   │   ├── ListItem.js    # Genera elementos de lista dinámicos
│   │   ├── MessageBox.js  # Maneja la actualización de mensajes en la interfaz
│   ├── modules/           # Lógica de negocio y procesamiento de datos
│   │   ├── calculate.js   # Realiza cálculos de peso y calorías
│   │   ├── toggleSelection.js # Maneja la selección y deselección de elementos
│   ├── utils/             # Funciones auxiliares reutilizables
│   │   ├── updateButton.js # Actualiza el estado de los botones
│   ├── assets/            # Recursos estáticos como estilos e imágenes
│   │   ├── styles/
│   │   │   ├── style.css  # Estilos principales de la aplicación
├── index.html             # Archivo HTML principal
├── package.json           # Dependencias y scripts del proyecto
├── README.md              # Documentación del proyecto
```

## Uso

1. **Seleccionar elementos:**
   Haz clic en los elementos de la lista para seleccionarlos o deseleccionarlos.

2. **Establecer límites:**
   Ingresa los valores de calorías mínimas y peso máximo en los campos correspondientes.

3. **Resultados:**
   La aplicación calculará automáticamente el peso total y las calorías de los elementos seleccionados y mostrará un mensaje indicando si cumplen con los límites establecidos.

## Tecnologías Utilizadas

- **HTML5:** Estructura de la aplicación.
- **CSS3:** Estilos y diseño.
- **JavaScript (Vanilla JS):** Lógica de la aplicación.
- **Node.js y npm:** Para gestionar dependencias y scripts de desarrollo.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

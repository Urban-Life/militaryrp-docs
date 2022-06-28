---
sidebar_position: 3
---

# SmartSnap

Toda la información relacionada con la herramienta SmartSnap.

## SmartSnap
El SmartSnap es una herramienta de **extrema precisión** a la hora de realizar una construcción o colocar props.
Su funcionalidad básica es proyectar una cuadrícula sobre el prop que estemos apuntando con la Toolgun, haciendo así que nuestra precisión aumente a la hora de colocar los props.

:::tip

Si mantenemos pulsado el botón de usar (por defecto E) se nos bloqueará la vista únicamente a la parte de la cuadrícula a la que estemos apuntando para aumentar más la precisión.

:::

### Opciones
Si abrimos el menú de construcción (por defecto con la Q) y vamos a la pestaña **Opciones** que se encuentra arriba a la derecha, podremos ver la opción **SmartSnap** que se encuentra en la categoría **Player**.

Aquí podremos ver todas las opciones que podremos configurar al SmartSnap, las cuales son:
- **Enable**: Activar/Desactivar el SmartSnap.
- **Use click grid**: La cuadrícula solo se mostrara si pulsamos el botón de usar sobre el prop.
- **Hide grid**: La cuadrícula se ocultará y solo se mostrará el punto para bloquear la vista.
- **Smart toggle enabled**: No tendremos que mantener el botón usar para bloquear la vista, solo pulsarlo (y luego volver a pulsarlo para desbloquearla).
- **Revert aim to grid snap on detach**: Si queremos que se nos devuelva la posición inicial de apuntado tras desbloquear la vista.
- **Draw thick center lines**: Poner que la línea vertical central sea más gruesa.
- **Grid toggle delay**: El tiempo (en segundos) en el que queremos que se muestre la cuadrícula.
- **Smart lock delay**: El tiempo (en segundos) que necesitemos mantener pulsado el botón usar para que se bloquee la vista sin necesitar seguir pulsando el botón (solo sirve si tenemos activado el Smart toggle).
- **Bounding Box enabled**: Mostrar las líneas azules que marcan las esquinas.
- **Grid draw distance**: La distancia a la que queremos que se nos muestre la cuadrícula de un prop.
- **Grid edge offset**: La distancia del margen de la cuadrícula.
- **Grid transparency**: La transparencia de las líneas de la cuadrícula.
- **Maximum number of snap points on an axis**: El máximo de puntos para bloquear la vista que queremos que haya en nuestra cuadrícula (esto condicionará el tamaño de la cuadrícula).
- **Minimum distance between each snap point**: La distancia mínima entre cada punto para bloquear la vista.

:::tip

La última opción `"Garbage collection boost"` está recomendada tenerla siempre activada excepto que tengamos bajos FPS cuando estemos viendo una cuadrícula.

:::
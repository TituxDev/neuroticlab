---
layout: layouts/views/apendix.njk
title: Requisitos
header_title: Requisitos
---

## Puntos clave

Antes de comenzar el taller necesitas tres cosas:

1. Una buena dosis de curiosidad —esto es lo más importante para disfrutar el proceso de aprendizaje—.  
2. Cualquier computadora funcional (no hace falta una supercomputadora; todo este código lo escribí en una **Acer Aspire 3 del 2017 con un procesador Celeron N3350 y 4 GB de RAM**. Y sí, corre sin drama).  
3. Un entorno donde puedas escribir, compilar y ejecutar código en lenguaje C. Más abajo te explico cómo configurarlo.

---

## El lenguaje de programación

De la misma forma que los idiomas que hablamos tienen sus reglas sobre dónde va el verbo y el adverbio, y cada idioma tiene sus particularidades, los lenguajes de programación son igual: un conjunto de reglas que debemos seguir para que la computadora entienda nuestras peticiones.

Para este taller he decidido usar el lenguaje C. Ya que es perfecto para enseñar porque no necesitas andar instalando mil paquetes raros ni levantar intérpretes mágicos. Solo compilas y listo.

Otra ventaja es que C tiene pocas reglas que memorizar. A diferencia de otros lenguajes modernos llenos de clases, métodos, atributos y palabritas que te obligan a estudiarte un diccionario entero, aquí puedes centrarte en lo importante sin perderte en la burocracia.

Y sobre todo, en C todo está a la vista: lo que escribes es exactamente lo que la máquina ejecuta. Nada de trucos ocultos.

## El compilador

Un compilador es un programa que toma el texto que escribes con instrucciones (el **código fuente**) y lo convierte en una serie de 1's y 0's que la computadora puede leer (el **archivo ejecutable**).

En nuestro caso, como vamos a programar en lenguaje C necesitaremos un compilador para lenguaje C (por supuesto).

Si ya tienes experiencia programando usa nano y gcc o las herramientas con las que te sientas mas cómodo, pero si eres nuevo en este mundillo te recomiendo usar Code::Blocks, este es un programa que ya contiene tanto el editor de código como un compilador y así te ahorrarás algunos dolores de cabeza, a continuación te explico como instalarlo segun tu sistema operativo.

---

## Instalando Code::Blocks

### Windows

**Descargar:**

1. Entra al sitio oficial: <a href="https://www.codeblocks.org/downloads/binaries/" target="_blank">Code::Blocks</a>
2. Busca la sección Windows XP / Vista / 7 / 8 / 10.
3. Descarga el instalador que dice: **codeblocks-XX.Xmingw-setup.exe**  
(el número de versión puede cambiar; asegúrate de elegir el que incluye mingw porque ya trae el compilador).

**Instalar:**

1. Ejecuta el archivo descargado.
2. Sigue el asistente de instalación. En los componentes, deja todo como está (incluye MinGW Compiler).
3. Finaliza la instalación.

### macOS

En macOS, no hay un paquete oficial de Code::Blocks que incluya el compilador. Por eso, lo más sencillo es usar **Xcode Command Line Tools** como compilador y luego instalar Code::Blocks por separado:

**Instalar Xcode Command Line Tools:**

1. Abre Terminal.
2. Escribe:  
``` lua
xcode-select --install
```
3. Acepta los términos y espera a que se complete la instalación.

**Descargar Code::Blocks:**

1. Desde el sitio oficial: <a href="https://www.codeblocks.org/downloads/binaries/" target="_blank">Code::Blocks</a>
2. Busca la sección de **Mac OS X** y descarga el instalador disponible.

Para **instalar** abre el archivo **.dmg** descargado y arrastra **Code::Blocks** a tu carpeta de **Aplicaciones**.

### Linux

En la mayoría de distribuciones Linux puedes instalar Code::Blocks y el compilador desde los repositorios oficiales. Aquí te dejo ejemplos:

Debian, Ubuntu y derivados:

``` bash
sudo apt update
sudo apt install codeblocks build-essential
```

Fedora:

``` bash
sudo dnf install codeblocks gcc-c++
```

Arch Linux / Manjaro:

``` bash
sudo pacman -S codeblocks gcc
```

---

## Primeros pasos con Code::Blocks

Una vez instalado Code::Blocks, hagamos una prueba para que puedas seguir los ejemplos del taller paso a paso.

### Al abrir Code::Blocks por primera vez

Al iniciar, aparecerá una ventana preguntando qué compilador usar por defecto.
Selecciona **GNU GCC Compiler**, haz clic en **Set as default** y luego en **OK**.

Si no ves ningún compilador disponible o aparece un error como *"Can't find compiler executable"*, revisa que hayas instalado correctamente el compilador correspondiente a tu sistema:

- En Windows, asegúrate de haber descargado el instalador con mingw.
- En Linux, asegúrate de haber instalado build-essential o gcc junto con codeblocks.
- En macOS, asegúrate de haber ejecutado el comando xcode-select --install.

### Crear un proyecto vacío

- En el menú superior de Code::Blocks, selecciona: **File > New > Project**
- En la ventana que se abre, elige **Empty Project** y haz clic en **Go**.
- Asigna un nombre al proyecto (recomendado: **NeuroTIC**) y elige una carpeta donde guardarlo.
- En las opciones del asistente, deja seleccionado el compilador por defecto (**GNU GCC Compiler**).
- Finaliza la creación del proyecto.

Esto generará una carpeta con el nombre que hayas elegido y un archivo .cbp (Code::Blocks Project) dentro de ella.

### Agregar tu archivo .c

- En la barra de herramientas, selecciona: **File > New > Empty File**
- Si es el primer archivo que se crea, aparecerá un mensaje preguntando si deseas integrarlo al proyecto. Acepta y se abrirá una ventana de guardado.
- Guarda el archivo en la carpeta del proyecto con un nombre significativo, por ejemplo: NeuroTIC.c. Es importante que el archivo termine con la **extensión .c**, ya que esta es obligatoria para que el compilador lo reconozca como código fuente en lenguaje C.

💡 Importante: para evitar errores de compilación al avanzar en el curso, no agregues múltiples archivos .c al proyecto, ya que cada uno tendrá su propia función main() y esto generará conflictos. Más adelante te enseñaré cómo organizar tus archivos de forma modular sin interferencias.

### Compilar y ejecutar

- Haz clic en la **rueda dentada verde** o presiona **F9**.
- Se abrirá una consola con la salida del programa.
- Si ves errores, revisa que todo esté bien copiado. ¡No olvides los ;!

---

## Preparado para aprender

Ya tienes todo lo necesario para comenzar: un entorno listo y las ganas de experimentar.  
No importa si nunca programaste: **iremos paso a paso**.  
Si llegaste hasta aquí, lo más desafiante ya lo hiciste: **decidiste empezar**.

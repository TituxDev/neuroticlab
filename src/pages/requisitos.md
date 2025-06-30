---
layout: layouts/views/apendix.njk
title: Requisitos
header_title: Requisitos
---

Antes de comenzar el taller, vas a necesitar una dosis de curiosidad (esto es lo más importante), y cualquier computadora que tengas a la mano. No hace falta que sea una nave espacial: si te sirve de consuelo, yo escribí todo este código en una Acer Aspire 3 con un procesador más viejo que muchos memes, y aquí estamos.

Además de eso, solo necesitas un par de requisitos más: un lenguaje de programación y un compilador, que te explico más abajo.

## El lenguaje de programación

De la misma forma que los idiomas que hablamos tienen sus reglas sobre dónde va el verbo y el adverbio, y cada idioma tiene sus particularidades, los lenguajes de programación son igual: un conjunto de reglas que debemos seguir para que la computadora entienda nuestros deseos.

Para este taller he decidido usar el lenguaje C. Ya que es perfecto para enseñar porque no necesitas andar instalando mil paquetes raros ni levantar intérpretes mágicos. Solo compilas y listo.

Otra ventaja es que C tiene pocas reglas que memorizar. A diferencia de otros lenguajes modernos llenos de clases, métodos, atributos y palabritas que te obligan a estudiarte un diccionario entero, aquí puedes centrarte en lo importante sin perderte en la burocracia.

Y sobre todo, me gusta porque en C todo está a la vista: lo que escribes es exactamente lo que la máquina ejecuta. Nada de trucos ocultos.

## El compilador

Un compilador es un programa que toma el texto que hemos escrito con instrucciones (el codigo fuente) y lo convierte en una serie de 1's y 0's que la computadora puede leer (el archivo ejecutable).

En nuestro caso, como vamos a programar en lenguaje C necesitaremos un compilador para lenguaje C (por supuesto).

Si ya tienes experiencia programando usa nano y gcc o las herramientas con las que te sientas mas cómodo, pero si eres nuevo en este mundillo te recomiendo usar Code::Blocks, este es un programa que ya contiene tanto el editor de código como un compilador y así te ahorrarás algunos dolores de cabeza, a continuacion te explico como instalarlo segun tu sistema operativo.

## Instalando Code::Blocks

### Windows

    Descargar

        Entra al sitio oficial:
        <a href="https://www.codeblocks.org/downloads/binaries/" target="_blank">Code::Blocks</a>

        Busca la sección Windows XP / Vista / 7 / 8 / 10.

        Descarga el instalador que dice:
        codeblocks-XX.Xmingw-setup.exe
        (el número de versión puede cambiar; asegúrate de elegir el que incluye mingw porque ya trae el compilador).

    Instalar

        Ejecuta el archivo descargado.

        Sigue el asistente de instalación. En los componentes, deja todo como está (incluye MinGW Compiler).

        Finaliza la instalación.

    Verificar

        Abre Code::Blocks.

        Al iniciar, te pedirá seleccionar el compilador por defecto. Elige GNU GCC Compiler.

        Crea un proyecto nuevo de prueba y compílalo para confirmar que todo funciona.

### macOS

En macOS, no hay un paquete oficial de Code::Blocks que incluya el compilador. Por eso, lo más sencillo es usar Xcode Command Line Tools como compilador y luego instalar Code::Blocks por separado:

    Instalar Xcode Command Line Tools

        Abre Terminal.

        Escribe:

``` lua
xcode-select --install
```

          Acepta los términos y espera a que se complete la instalación.

    Descargar Code::Blocks

        Desde el sitio oficial:
        <a href="https://www.codeblocks.org/downloads/binaries/" target="_blank">Code::Blocks</a>


        Busca la sección de Mac OS X y descarga el instalador disponible.

    Instalar

        Abre el archivo .dmg descargado y arrastra Code::Blocks a tu carpeta de Aplicaciones.

    Verificar

        Abre Code::Blocks y crea un proyecto de prueba.

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

Una vez instalado, abre Code::Blocks desde el menú de aplicaciones.

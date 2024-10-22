
export namespace Scroll {
    export const scrollToSection = (element:HTMLElement): void =>  {
        element.scrollIntoView({behavior: 'smooth'});
    }
}
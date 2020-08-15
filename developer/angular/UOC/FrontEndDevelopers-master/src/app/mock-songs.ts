import { Song } from '../app/song';

export const SONGS: Song [] = [
    { 
        id: 1,
        title: 'I Want to Break Free',
        album: 'The Works',
        author: 'Queen',
        style: 'Rock',
        year: '1984',
        duration: '05:00',
        description: 'Cuando I Want To Break Free fue lanzado como single en 1984, fue otro éxito para Queen, número 3 en las listas británicas. La canción llegó al Top 10 en la mayoría de las listas de éxitos del mundo, incluso llegó al primer lugar en países como Austria, Bélgica y Holanda',
        picture: '../../assets/img/queen.jpg',
        cover: '../../assets/img/queen_theworks.jpg',
        audio_url: '../../assets/mp3/Queen - I Want To Break Free.mp3',
    },
    
    {
        id: 2,
        title: 'Every Breath You Take',
        album: 'Synchronicity',
        author: 'The Police',
        style: 'Rock',
        year: '1983',
        duration: '03:44',
        description: 'Every Breath You Take es una power ballad grabada e interpretada de la banda británica de rock The Police, perteneciente al álbum Synchronicity (1983). Escrita por Sting, se convirtió en el mayor éxito de 1983, encabezando la lista Billboard de los 100 sencillos más vendidos durante ocho semanas, siendo el único sencillo de la banda en esta tabla; perdurando así hasta hoy como insignia tanto de Sting, como de la banda.',
        picture: '../../assets/img/thepolice.jpg',
        cover: '../../assets/img/thepolice_synchronicity.jpg',
        audio_url: '../../assets/mp3/The Police - Every Breath You Take.m4a',
    },

    {
        id: 3,
        title: 'Money for Nothing',
        album: 'Brothers in Arms',
        author: 'Dire Straits',
        style: 'Rock',
        year: '1985',
        duration: '08:25',
        description: 'Money for Nothing es una canción interpretada por la banda británica de rock Dire Straits, extraída de su quinto álbum de estudio Brothers in Arms y publicada por la compañía discográfica Vertigo Records el 24 de junio de 1985 como el segundo sencillo del disco. Compuesta por Mark Knopfler en colaboración con Sting,2​ las letras del tema fueron consideradas polémicas desde su lanzamiento, ya que se basan en un hombre de clase trabajadora que se encuentra haciendo videos y comenta sobre ello. La canción cuenta con un cameo de Sting cantando en falsete la introducción y en la parte del coro.',
        picture: '../../assets/img/dire_straits.jpg',
        cover: '../../assets/img/dire_straits_brothersinarms.jpg',
        audio_url: '../../assets/mp3/Dire Straits - Money For Nothing.m4a',
    },

    {
        id: 4,
        title: 'With or Without You',
        album: 'The Joshua Tree',
        author: 'U2',
        style: 'Rock',
        year: '1987',
        duration: '04:56',
        description: 'With or Without You es una power ballad de la banda irlandesa de rock U2. Es la tercera canción de su quinto álbum de estudio The Joshua Tree (1987), fue lanzada como el primer sencillo del álbum el 5 de enero de 1987, convirtiéndose de esta manera en el primer sencillo de U2 en alcanzar el n.º 1 en Estados Unidos, donde permaneció durante un plazo de tres semanas.',
        picture: '../../assets/img/u2.jpg',
        cover: '../../assets/img/u2_thejoshuatree.jpg',
        audio_url: '../../assets/mp3/U2 - With Or Without You.m4a',
    },

    {
        id: 5,
        title: 'Paranoid Android',
        album: 'OK Computer',
        author: 'Radiohead',
        style: 'Indie',
        year: '1997',
        duration: '06:23',
        description: '«Paranoid Android» (en español: «Androide paranoide») es una canción de la banda inglesa de rock alternativo Radiohead, que figura como la segunda pista de su álbum OK Computer de 1997. La letra de la sombría pero intencionadamente humorística canción fue escrita principalmente por el vocalista Thom Yorke, después de una mala experiencia en un bar de Los Ángeles. Con sus seis minutos y veintitrés segundos de duración, la canción está notablemente influenciada por el tema «Happiness Is a Warm Gun» de The Beatles .',
        picture: '../../assets/img/radiohead.jpg',
        cover: '../../assets/img/radiohead_okcomputer.jpg',
        audio_url: '../../assets/mp3/Radiohead - Paranoid Android.mp3',
    }


]

<script>
    import {onMount, onDestroy} from 'svelte'      
    import {GetVerseText,BibleVerses,CurrentBook,CurrentVersion,CurrentChapter} from '../stores/bibleapi'
    
    onMount( async () => { 
        console.log(`Verses Mounted....`);
        GetVerseText($CurrentVersion,$CurrentBook,$CurrentChapter);
    })  
    onDestroy( ()=>
    {
        console.log(`Verses Destory()`);
    }) 
 </script>  
<div class="verseReadingPane">
    
    {#each $BibleVerses as verse}
        <span class='verseSpan'> 
            <div class="VerseNumber">{verse.v}</div>
            <div class="Verseparagraph">)</div>
            <div class="VerseText">{verse.t}</div>
        </span>
    {/each}
   
</div> 
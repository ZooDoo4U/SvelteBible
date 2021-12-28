<script>  
    import {GetChaptersForBook, GetVerseText,BibleChapters, CurrentBook, CurrentChapter, CurrentVersion} from '../stores/bibleapi'
    import {onMount,onDestroy} from 'svelte';
    import { WheelScroll } from './WheelHandler';
      
    onMount(async()=>
    {
      GetChaptersForBook($CurrentVersion, $CurrentBook);
    })
  
    onDestroy( ()=>
    {
  
    })
       
    const ChapterChanged = (e) =>
    {
      let chapter = e.target.value;
      $CurrentChapter = chapter;
      GetVerseText($CurrentVersion,$CurrentBook,$CurrentChapter);
    }       
  </script>
   
<span class="SelectorLabel">Chapter ({$BibleChapters.length}):
  <select on:change={(e) => ChapterChanged(e)} on:wheel|preventDefault={(e)=>{WheelScroll(e,ChapterChanged)}} class='selectionList'>
    {#each $BibleChapters as chapter}
        <option class='selectionList'>{chapter}</option>        
    {/each}
  </select>
</span> 
<script>
  import {GetBookAbbreviations, GetChaptersForBook, GetVerseText,BibleBooks, CurrentBook, CurrentChapter, CurrentVersion} from '../stores/bibleapi'
  import {onDestroy, onMount} from 'svelte';
  import { WheelScroll } from './WheelHandler';
   
  onMount(async()=>{
        
    let curVer = $CurrentVersion;
    if( curVer)
    {
      GetBookAbbreviations($CurrentVersion);   //  ???? needed?
    }
  })
  
  onDestroy( ()=>
  {
    console.log(`books destory`);
  })
  
  const BookChanged = (e) =>{
    
    $CurrentBook = e.target.value;
    $CurrentChapter = 1;
      
    GetChaptersForBook($CurrentVersion,e.target.value);
    GetVerseText($CurrentVersion,$CurrentBook,$CurrentChapter);
    
  }
  
</script>
 
  <span class='SelectorLabel'>Books:
    <select on:change={(e) =>BookChanged(e)} on:wheel|preventDefault={(e)=>{WheelScroll(e,BookChanged)}} class='selectionList'>
      {#each $BibleBooks as book}
          <option class='selectionList'>{book}</option>        
      {/each}
    </select>
  </span> 


<script>
    // import { writable } from 'svelte/store';
    import {onMount, onDestroy} from 'svelte'  
    import { CurrentVersion ,BibleVersions,GetBibleVersions,GetBookAbbreviations,GetChaptersForBook,GetVerseText,CurrentBook, CurrentChapter} from '../stores/bibleapi'
    import { WheelScroll } from './WheelHandler.js';
    
    onMount( async () => { 
        GetBibleVersions();  
        $CurrentVersion = 'NASB'   
    })       
    
    onDestroy(()=>{
        console.log(`Versions destroy()`);
    })
    
    const versionChanged = (e)=>
    {        
        $CurrentVersion = e.target.value;
        GetVerseText($CurrentVersion,$CurrentBook,$CurrentChapter);
    } 
    
</script> 

<span class='SelectorLabel'>  
      Version: 
        <select id='versions' on:change={versionChanged} on:wheel|preventDefault={(e)=>{WheelScroll(e,versionChanged)}} class='selectionList'>   
      {#each $BibleVersions  as v }
          <option class='selectionList'>{v}</option>
      {/each}                
  </select>
</span>        
 



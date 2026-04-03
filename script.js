<script>
function toggleQuickFacts() {
    const content = document.getElementById('quick-facts-content');
    const icon = document.getElementById('qf-icon');

    if(content.style.maxHeight){
        // Collapse
        content.style.maxHeight = null;
        content.style.padding = "0 20px";
        icon.style.transform = "rotate(0deg)";
    } else {
        // Expand
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "15px 20px";
        icon.style.transform = "rotate(180deg)";
    }
}
</script>

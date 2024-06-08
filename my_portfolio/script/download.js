document.getElementById('downloadButton').addEventListener('click', function(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = this.href;
    link.download = this.href.split('/').pop(); // Extracts the file name from the URL
    link.click();
    window.open(this.href, '_blank'); // Opens the file in a new tab
});
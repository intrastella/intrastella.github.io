<form>
            <label for="fname" id="l_fname">Name:</label>
            <input type="text" id="fname" name="fname"><br><br>

            <label for="quest" id="l_quest">Comment:</label>
            <textarea id="quest" name="quest"></textarea>

            <button type="button" onclick="CreateTextFile();" id="sub">SUBMIT</button>
          </form>


<script type="text/javascript">var submitted=false;</script>
          <script type="text/javascript">
            $('#gform').on('submit', function(e) {
              $('#gform *').fadeOut(2000);
              $('#gform').prepend('Your submission has been processed...');
              });
          </script>

          <form name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSdHqOhl9im3TghX7BVAFjp6Ba_sK3qRqPRRGO97sUV7-tFuEw/formResponse?" target="hidden_iframe" onsubmit="submitted=true;">
            Name<br>
            <input type="text" name="entry.810989529" id="entry.810989529"><br>

            Message<br>
            <input type="text" name="entry.463380756" id="entry.463380756">

            <input type="submit" value="Submit">
          </form>

          <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>




https://docs.google.com/forms/d/e/1FAIpQLSdBsHuJB2ucN9jHI8JMOaO9ys2Jh4PNDlWl5hRvhG94snZthA/viewform?usp=pp_url&entry.2013752=stella&entry.1018467339=test+function&entry.1727283059=2023-7-6-VAE


https://docs.google.com/forms/d/e/1FAIpQLSemBZ6uj_oCrAQ3J4OasbWn6iOFyudplzL0Mj1Fb7Dc41C_rQ/viewform?usp=pp_url&entry.1382275470=stella&entry.460579987=text&entry.50349658=2023-7-6-VAE&entry.232104705=200&entry.1690827949=500


Deployment ID
AKfycbwAuqFPSz8pX9IBGCvXLsWtxalYnVD6TF2kKWpCra0J4bGfpoWXV-e8wYOa5o1SAfxd


URl
https://script.google.com/macros/s/AKfycbwAuqFPSz8pX9IBGCvXLsWtxalYnVD6TF2kKWpCra0J4bGfpoWXV-e8wYOa5o1SAfxd/exec


const baseUrl = "https://script.google.com/macros/s/AKfycbwAuqFPSz8pX9IBGCvXLsWtxalYnVD6TF2kKWpCra0J4bGfpoWXV-e8wYOa5o1SAfxd/exec";  // Please set your Web Apps URL.
            const para = {
              spreadsheetId: "661162161",  // Please set your Google Spreadsheet ID.
              sheetName: "comments1"  // Please set the sheet name you want to retrieve the values.
            };


    
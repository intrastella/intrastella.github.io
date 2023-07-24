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


https://docs.google.com/forms/d/e/1FAIpQLSdHqOhl9im3TghX7BVAFjp6Ba_sK3qRqPRRGO97sUV7-tFuEw/viewform?usp=pp_url&entry.1078529988=mia&entry.1440645859=nana


    
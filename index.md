<style>
    body {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        min-width: 256px;
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    }

    .section {
        counter-increment: section;
        font-size: 14pt;
        text-indent: 50px;
        margin: inherit;
    }

    .section::before {
        content: "Section "counter(section) ". ";
        font-weight: bold;
    }

    .header {
        font-size: 24pt;
        font-weight: bold;
        text-align: center;
        margin: inherit;
    }

    .article {
        counter-reset: section;
        counter-increment: article;
        font-size: 18pt;
        font-weight: bold;
        text-align: center;
        margin: inherit;
    }

    .article::before {
        content: "Article "counter(article, upper-roman) " - ";
    }
</style>
<!DOCTYPE html>
<html>

<body>
    <div class="header">Constitution of the Socialist Unity Party of Ukraine</div>
    <div class="article">Name</div>
    <div class="section">The name of this organization shall be the Socialist Unity Party of Ukraine abbreviated SUPU
        hereafter
        referred to as "the Party".</div>
    <div class="article">Membership</div>
    <div class="section">An application for membership may be received by the Central Committee.</div>
    <div class="section">All applications shall be accepted unless the Central Committee has information that the
        application
        was
        false or that admitting the applicant would be harmful to the Party organization and its goals.</div>
    <div class="section">Membership in the Party is completely voluntary.</div>
    <div class="section">Membership may be annulled by the Party Congress.</div>
    <div class="article">Party Congress</div>
    <div class="section">The highest authority of the Party is the Party Congress. It is authorized to make political
        and
        organizational decisions binding upon the entire Party. The decisions of the Party Congress shall guide all
        Party
        organizations and members.</div>
    <div class="section">Regular Party Congress shall be held every four years.</div>
    <div class="section">The Party Congress shall be composed of delegates elected by all members of the Party.</div>
    <div class="section">A special Party Congress shall be called when there is an affirmative vote of 40 percent of the
        members of
        the Central Committee or a majority vote of members of the Party.</div>
    <div class="section">Each Party Congress shall determine the number of delegates and the date of the next Party
        Congress.
    </div>
    <div class="article">Central Committee</div>
    <div class="section">Between Party Congresses, the Central Committee is the highest authority of the Party,
        representing
        the
        Party as a whole.</div>
    <div class="section">Vacancies in the Central Committee may be filled by majority vote of the Central Committee.
    </div>
    <div class="section">The Central Committee shall elect such officers as it decides upon. The Central Committee shall
        establish
        such other committees as it deems necessary to carry out its work. It may delegate its powers and
        responsibilities
        to those officers or committees as appropriate.</div>
    <div class="section">All such officers and committees shall be responsible to the Central Committee.</div>
    <div class="section">The Central Committee shall be elected by the Party Congress.</div>
    <div class="article">Amendment</div>
    <div class="section">This Constitution may be amended by a two-thirds vote of any regular or special Party Congress.
    </div>
</body>

</html>
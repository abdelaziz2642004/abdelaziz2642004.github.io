jQuery(document).ready(function ($) {
    /*======= Skillset *=======*/
    
    function animateSkillBars() {
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            $(this).animate({ width: itemWidth }, 800);
        });
    }

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', animateSkillBars);

    $(window).on('resize', function () {
        $('.level-bar-inner').css('width', '0');
        animateSkillBars();
    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss(
        "http://feeds.feedburner.com/TechCrunch/startups",
        {
            limit: 3,
            effect: 'slideFastSynced',
            layoutTemplate: "<div class='item'>{entries}</div>",
            entryTemplate:
                '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3>' +
                '<div><p>{shortBodyPlain}</p>' +
                '<a class="more-link" href="{url}" target="_blank">' +
                '<i class="fa fa-external-link"></i> Read more</a></div>'
        }
    );

    /* Github Activity Feed - Only load on larger screens */
    if ($(window).width() > 600) {
        GitHubActivity.feed({ username: "caseyscarborough", selector: "#ghfeed" });
    }
});

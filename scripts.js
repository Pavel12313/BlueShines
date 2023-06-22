document.addEventListener('DOMContentLoaded', () => {
  let currentLanguage = 'jp'; // Default language is Japanese
  let selectedMemberData = null;

  const translations = {
      jp: {
          reasonLabel: '野球を始めた理由は？',
          reasonToComeLabel: '野球歴はどれくらい？',
          yearsOfExperienceLabel: '経験年数は？',
          favouriteThingLabel: '野球で好きなことは？',
          goalLabel: '目指している目標は？',
          encourageWomenLabel: '女性が野球を始めるための提案は？',
          necessarySkillsLabel: '野球で必要なスキルは？',
          charmOfBaseballLabel: '野球の魅力とは？',
          members: {
              "田中 千尋(たなか ちひろ) #10": {
                name: 'Chihiro Tanaka #10',
                title: 'First Base', 
                reason: 'For the development of women\'s baseball',
                reasonToCome: 'Because my alma mater IPU is in Okayama', 
                yearsOfExperience: '17 years',
                favouriteThing: 'Playing catch',
                goal: 'To be the best in Japan',
                encourageWomen: 'Creating an environment',
                necessarySkills: 'Communication',
                charmOfBaseball: 'Team competition'
              }

          }
      },
      en: {
          reasonLabel: 'Reason for starting baseball:',
          reasonToComeLabel: 'Years of experience in baseball:',
          yearsOfExperienceLabel: 'Years of experience:',
          favouriteThingLabel: 'Favorite thing about baseball:',
          goalLabel: 'Goal:',
          encourageWomenLabel: 'Suggestions for women interested in playing baseball:',
          necessarySkillsLabel: 'Necessary skills for baseball:',
          charmOfBaseballLabel: 'Charm of baseball:',
          members: {
            "田中 千尋": {
              name: 'Chihiro Tanaka #10',
              title: 'First Base',
              reason: 'For the development of women\'s baseball',
              reasonToCome: 'Because my alma mater IPU is in Okayama',
              yearsOfExperience: '17 years',
              favouriteThing: 'Playing catch',
              goal: 'To be the best in Japan',
              encourageWomen: 'Creating an environment',
              necessarySkills: 'Communication',
              charmOfBaseball: 'Team competition'
          },
          "西原 小央": {
              name: 'Koho Nishiba #11',
              title: 'Pitcher, Center Fielder',
              reason: 'Haven\'t been able to repay my parents',
              reasonToCome: 'Because the Setouchi Blue Shines baseball team was established',
              yearsOfExperience: '13 years',
              favouriteThing: 'Striking out batters as a pitcher',
              goal: 'To repay my parents and win the championship with the team',
              encourageWomen: 'Creating a women\'s baseball team',
              necessarySkills: 'Intelligence, technique, skill',
              charmOfBaseball: 'Uncertainty until the very end'
          },
          "野下 華鈴": {
              name: 'Karin Noshita #13',
              title: 'Second Base',
              reason: 'Because it\'s fun',
              reasonToCome: 'To promote Setouchi City through baseball',
              yearsOfExperience: '16 years',
              favouriteThing: 'Practicing while thinking',
              goal: 'To win the championship with Setouchi Blue Shines',
              encourageWomen: 'Promoting women\'s baseball from Okayama',
              necessarySkills: 'Personal character',
              charmOfBaseball: 'Inspiring courage and excitement in spectators'
          },
          "山本 涼香": {
              name: 'Suzuka Yamamoto #5',
              title: 'Second Base',
              reason: 'Because it\'s fun and interesting',
              reasonToCome: 'To balance baseball and work',
              yearsOfExperience: '15 years',
              favouriteThing: 'Being a team sport and being able to do various things like pitching, hitting, fielding, and running',
              goal: 'To become a member of the Japanese national team and win with this team',
              encourageWomen: 'Making women\'s sports popular worldwide',
              necessarySkills: 'Body control, muscles, flexibility',
              charmOfBaseball: 'Attack and defense aspects'
          },
          "新川 礼栄": {
              name: 'Ayaeshi Shinokawa #2',
              title: 'Third Base',
              reason: 'Because I love baseball and want to win the championship',
              reasonToCome: 'Heard that a new baseball team was being formed in Setouchi',
              yearsOfExperience: '14 years',
              favouriteThing: 'Cooperating with teammates and being able to make efforts together',
              goal: 'To become a person who receives support',
              encourageWomen: 'Promoting women\'s baseball',
              necessarySkills: 'Technical skills and strong mentality',
              charmOfBaseball: 'Being able to achieve things together as a team'
          },
          "山本 彩夏": {
              name: 'Ayaka Yamamoto #6',
              title: 'Shortstop, Third Base',
              reason: 'Because it\'s the happiest time for me',
              reasonToCome: 'To play baseball',
              yearsOfExperience: '13 years',
              favouriteThing: 'Hitting a hit',
              goal: 'To play baseball abroad',
              encourageWomen: 'Creating an environment where anyone can play',
              necessarySkills: 'Enjoyment',
              charmOfBaseball: 'Being a part of the body'
          },
          "駒井 莉子": {
              name: 'Riko Komai #45',
              title: 'Catcher, Outfielder',
              reason: 'To enjoy life to the fullest',
              reasonToCome: 'To baseball with the BlueShines & contribute to the community',
              yearsOfExperience: '14 years',
              favouriteThing: 'Energizing the team with plays',
              goal: 'Becoming a role model for people of all ages',
              encourageWomen: 'Introducing women\'s baseball to more people',
              necessarySkills: 'Open-mindedness, humility, perseverance',
              charmOfBaseball: 'Losing even when strong'
          },
          "楢崎 涼": {
              name: 'Suzu Narasaki #7',
              title: 'Center Fielder, Pitcher, Catcher',
              reason: 'To live life happily',
              reasonToCome: 'To play baseball with the Setouchi Blue Shines',
              yearsOfExperience: '16 years',
              favouriteThing: 'Creating dramatic and moving moments',
              goal: 'Elevating women\'s baseball to entertainment',
              encourageWomen: 'Expanding post-university paths (university baseball teams, company teams, etc.) for women',
              necessarySkills: 'Communication skills',
              charmOfBaseball: 'Creating dramatic and moving moments'
          },
          "増井 綺音": {
              name: 'Ayane Masui #18',
              title: 'Pitcher',
              reason: 'Because it\'s fun',
              reasonToCome: 'To promote baseball in Setouchi City',
              yearsOfExperience: '12 years',
              favouriteThing: 'Pitching',
              goal: 'To become the best in Japan',
              encourageWomen: 'Spreading women\'s baseball',
              necessarySkills: 'Batting',
              charmOfBaseball: 'Having fun as a team'
          },
          "安東 素愛": {
              name: 'Soa Ando #19',
              title: 'Catcher',
              reason: 'Because of admiration for my older brother',
              reasonToCome: 'To continue playing baseball in Okayama Prefecture',
              yearsOfExperience: '12 years',
              favouriteThing: 'Winning games',
              goal: 'To become the best in Japan',
              encourageWomen: 'Promoting women\'s baseball',
              necessarySkills: 'Enthusiasm, ambition',
              charmOfBaseball: 'The challenge of not finding the right answer no matter how much you try'
          },
          "澤田 祐恵": {
              name: 'Hiori Sawada #0',
              title: 'Left First Base, Pitcher',
              reason: 'Because I enjoy and love baseball',
              reasonToCome: 'Because the team was formed',
              yearsOfExperience: '15 years',
              favouriteThing: 'Winning games',
              goal: 'To achieve maximum personal growth through baseball',
              encourageWomen: 'Increasing awareness',
              necessarySkills: 'Openness',
              charmOfBaseball: 'Accomplishing things together as a team'
          },
          "奥田 和歌": {
              name: 'Waka Okuda #48',
              title: 'Right Fielder',
              reason: 'Because I love it!',
              reasonToCome: 'Because there was the Blue Shines',
              yearsOfExperience: '16 years',
              favouriteThing: 'Playing catch',
              goal: 'To be the best in Japan',
              encourageWomen: 'Promoting women\'s baseball',
              necessarySkills: 'Learning attitude',
              charmOfBaseball: 'Having both individual and team elements'
          },
          "勝力 衣里奈": {
              name: 'Erina Shoriki #1',
              title: 'Outfielder, Pitcher',
              reason: 'Because it\'s fun',
              reasonToCome: 'Because I was called',
              yearsOfExperience: '13 years',
              favouriteThing: 'Throwing',
              goal: 'To achieve results',
              encourageWomen: 'SNS activities',
              necessarySkills: 'Patience, perseverance',
              charmOfBaseball: 'Being able to inspire others'
          }
      }
  }
  };

  const selectedImg = document.getElementById('selectedImg');
  const selectedName = document.getElementById('selectedName');
  const selectedPosition = document.getElementById('selectedPosition');
  const selectedDescription = document.getElementById('selectedDescription');

  const teamMemberGrid = document.querySelector('.team-member-grid');
  
  teamMemberGrid.addEventListener('click', (event) => {
      const teamMember = event.target.closest('.team-member');
      if (!teamMember) return;
      
      selectedMemberData = teamMember.dataset;
      
      // Extract the name without additional information for translation lookup.
      selectedMemberData.simpleName = selectedMemberData.name.split('(')[0].trim();
      
      updateDescription();
  });

  function updateDescription() {
    if (!selectedMemberData) return;
    
    const labels = translations[currentLanguage];
    const memberTranslations = translations[currentLanguage].members[selectedMemberData.simpleName] || {};
    
    selectedImg.src = selectedMemberData.img;
    selectedImg.alt = memberTranslations.name || selectedMemberData.name;
    selectedName.textContent = memberTranslations.name || selectedMemberData.name;
    selectedPosition.textContent = selectedMemberData.position;
    
    
    const selectedTitle = document.getElementById('selectedTitle');
    selectedTitle.textContent = selectedMemberData.title; // Add this line
    selectedTitle.textContent = memberTranslations.title || selectedMemberData.title;

    
    selectedDescription.innerHTML = `
    <table>
        <tr>
            <td>${labels.reasonLabel}</td>
            <td>${memberTranslations.reason || selectedMemberData.reason}</td>
        </tr>
        <tr>
            <td>${labels.reasonToComeLabel}</td>
            <td>${memberTranslations.reasonToCome || selectedMemberData.reasonToCome}</td>
        </tr>
        <tr>
            <td>${labels.yearsOfExperienceLabel}</td>
            <td>${memberTranslations.yearsOfExperience || selectedMemberData.yearsOfExperience}</td>
        </tr>
        <tr>
            <td>${labels.favouriteThingLabel}</td>
            <td>${memberTranslations.favouriteThing || selectedMemberData.favouriteThing}</td>
        </tr>
        <tr>
            <td>${labels.goalLabel}</td>
            <td>${memberTranslations.goal || selectedMemberData.goal}</td>
        </tr>
        <tr>
            <td>${labels.encourageWomenLabel}</td>
            <td>${memberTranslations.encourageWomen || selectedMemberData.encourageWomen}</td>
        </tr>
        <tr>
            <td>${labels.necessarySkillsLabel}</td>
            <td>${memberTranslations.necessarySkills || selectedMemberData.necessarySkills}</td>
        </tr>
        <tr>
            <td>${labels.charmOfBaseballLabel}</td>
            <td>${memberTranslations.charmOfBaseball || selectedMemberData.charmOfBaseball}</td>
        </tr>
    </table>`;
}

  document.getElementById('englishBtn').addEventListener('click', () => {
      currentLanguage = 'en';
      updateDescription();
  });

  document.getElementById('japaneseBtn').addEventListener('click', () => {
      currentLanguage = 'jp';
      updateDescription();
  });

  document.getElementById('languageBtn').addEventListener('click', function() {
    this.parentNode.classList.toggle('show');
  });

  
  
});

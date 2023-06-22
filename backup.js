document.addEventListener('DOMContentLoaded', () => {
  const teamMemberGrid = document.querySelector('.team-member-grid');
  const selectedImg = document.getElementById('selectedImg');
  const selectedName = document.getElementById('selectedName');
  const selectedTitle = document.getElementById('selectedTitle');
  const selectedDescription = document.getElementById('selectedDescription');
  const selectedPosition = document.getElementById('selectedPosition');

  teamMemberGrid.addEventListener('click', (event) => {
    const teamMembers = Array.from(document.querySelectorAll('.team-member'));

    teamMembers.forEach((member) => {
      member.classList.remove('selected');
    });

    const teamMember = event.target.closest('.team-member');
    if (!teamMember) return;

    const img = teamMember.dataset.img;
    const name = teamMember.dataset.name;
    const title = teamMember.dataset.title;
    const position = teamMember.dataset.position;
    const reason = translateReason(teamMember.dataset.reason);
    const reasonToCome = translateReasonToCome(teamMember.dataset.reasonToCome);
    const yearsOfExperience = translateYearsOfExperience(teamMember.dataset.yearsOfExperience);
    const favouriteThing = translateFavouriteThing(teamMember.dataset.favouriteThing);
    const goal = translateGoal(teamMember.dataset.goal);
    const encourageWomen = translateEncourageWomen(teamMember.dataset.encourageWomen);
    const necessarySkills = translateNecessarySkills(teamMember.dataset.necessarySkills);
    const charmOfBaseball = translateCharmOfBaseball(teamMember.dataset.charmOfBaseball);

    selectedImg.src = img;
    selectedImg.alt = name;
    selectedName.textContent = name;
    selectedTitle.textContent = title;
    selectedDescription.innerHTML = `
    <table>
      <tr>
        <td>Reason for playing baseball:</td>
        <td>${reason}</td>
      </tr>
      <tr>
        <td>Years of experience:</td>
        <td>${yearsOfExperience}</td>
      </tr>
      <tr>
        <td>Favorite aspect of baseball:</td>
        <td>${favouriteThing}</td>
      </tr>
      <tr>
        <td>Goal:</td>
        <td>${goal}</td>
      </tr>
      <tr>
        <td>Proposals to encourage women in baseball:</td>
        <td>${encourageWomen}</td>
      </tr>
      <tr>
        <td>Necessary skills in baseball:</td>
        <td>${necessarySkills}</td>
      </tr>
      <tr>
        <td>The charm of baseball:</td>
        <td>${charmOfBaseball}</td>
      </tr>
    </table>
    `;
    selectedPosition.textContent = position;

    teamMember.classList.add('selected');
  });

  function translateReason(reason) {
    switch (reason) {
      case '楽しいから':
        return 'Because it is fun';
      case '女子野球発展のため':
        return 'For the development of women\'s baseball';
      // Add more translations for other reasons as needed
      default:
        return reason;
    }
  }

  function translateReasonToCome(reasonToCome) {
    switch (reasonToCome) {
      case '母校のIPUが岡山にあるので':
        return 'Because my alma mater IPU is in Okayama';
      case '瀬戸内ブルーシャインズの野球チームが発足されたから':
        return 'Because the Setouchi Blueshines baseball team was established';
      // Add more translations for other reasons to come as needed
      default:
        return reasonToCome;
    }
  }

  function translateYearsOfExperience(yearsOfExperience) {
    return `${yearsOfExperience} years`;
  }

  function translateFavouriteThing(favouriteThing) {
    switch (favouriteThing) {
      case 'キャッチボール':
        return 'Playing catch';
      case 'ピッチャーで三振をとること':
        return 'Striking out batters as a pitcher';
      // Add more translations for other favorite things as needed
      default:
        return favouriteThing;
    }
  }

  function translateGoal(goal) {
    switch (goal) {
      case '日本一':
        return 'To become the best in Japan';
      case '両親に恩返しをすること・チームで日本一になること':
        return 'To repay my parents and become the best in Japan as a team';
      // Add more translations for other goals as needed
      default:
        return goal;
    }
  }

  function translateEncourageWomen(encourageWomen) {
    switch (encourageWomen) {
      case '女子野球チームをつくる':
        return 'To create a women\'s baseball team';
      case '岡山から女子野球を広める':
        return 'To promote women\'s baseball from Okayama';
      // Add more translations for other ways to encourage women as needed
      default:
        return encourageWomen;
    }
  }

  function translateNecessarySkills(necessarySkills) {
    switch (necessarySkills) {
      case '忍耐力、継続力':
        return 'Patience, perseverance';
      case '知能・技術・実力':
        return 'Intelligence, technique, skill';
      // Add more translations for other necessary skills as needed
      default:
        return necessarySkills;
    }
  }

  function translateCharmOfBaseball(charmOfBaseball) {
    switch (charmOfBaseball) {
      case 'チーム競技':
        return 'Team sport';
      case '最後の最後までなにがあるかわからないところ':
        return 'Not knowing what will happen until the very end';
      // Add more translations for other charms of baseball as needed
      default:
        return charmOfBaseball;
    }
  }
});

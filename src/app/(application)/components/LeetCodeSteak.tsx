import React from "react";

async function LeetCodeSteak() {
  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query($username: String!) {
          matchedUser(username: $username) {
            userCalendar {
              submissionCalendar
            }
          }
        }
      `,
      variables: { username: "indranilbera7863" },
    }),
  });

  const data = await res.json();
  const calendar = JSON.parse(
    data.data.matchedUser.userCalendar.submissionCalendar,
  );
  const days = Object.entries(calendar).map(([ts, count]) => ({
    date: new Date(Number(ts) * 1000),
    count,
  }));

  const generateDays = () => {
    const result = [];
    const today = new Date();

    for (let i = 364; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);

      // ✅ normalize to midnight UTC
      const utc = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 1000;

      result.push({
        date: d,
        count: calendar[utc] || 0,
      });
    }

    return result;
  };

  const heatmapDays = generateDays();
  console.log(heatmapDays);
  const getColor = (count: number) => {
    if (count === 0) return "bg-gray-800";
    if (count < 3) return "bg-green-300";
    if (count < 6) return "bg-green-500";
    return "bg-green-700";
  };

  return (
    <div className="w-full lg:w-[70%] mx-auto rounded-sm py-4 overflow-x-auto  ">
      <div className="flex gap-0.75 px-4 bg-gray-900 rounded-lg min-w-max lg:min-w-212.5 py-4  justify-center items-center">
        {Array.from({ length: 52 }).map((_, week) => (
          <div
            key={week}
            className="flex flex-col gap-0.75 py-2 shrink-0"
          >
            {heatmapDays.slice(week * 7, week * 7 + 7).map((day, i) => (
              <div
                key={i}
                title={`${day.date.toDateString()} - ${day.count}`}
                className={`w-3 h-3 rounded-xs ${getColor(day.count)}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeetCodeSteak;

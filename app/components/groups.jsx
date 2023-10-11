import React from 'react';

const groupsData = [
  { id: 1, name: 'USJP FOT 19/20', description: 'This group was created to shfadhfkhkadf' },
  { id: 2, name: 'Blender Community', description: 'This group was created to shfadhfkhkadf' },
  { id: 3, name: 'Software Technology', description: 'This group was created to shfadhfkhkadf' },
  { id: 4, name: 'ICT Project', description: 'This group was created to shfadhfkhkadf' },
  { id: 5, name: 'HCI Project', description: 'This group was created to shfadhfkhkadf' },
];

const getRandomColor = () => {
  const colors = ['bg-light_yellow', 'bg-light_purple', 'bg-light_pink', 'bg-light_blue'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

// Function to get initials from a string
const getInitials = (name) => {
  const words = name.split(' ');
  if (words.length > 1) {
    return `${words[0][0]}${words[1][0]}`;
  } else {
    return name.slice(0, 3);
  }
};

export default function Groups() {
  return (
    <div>
      <h2 className="dash_text font-bold flex justify-center p-5">
        Group Chats
      </h2>

      <div className="flex flex-wrap">
        {groupsData.map(group => (
          <div key={group.id} className="w-1/2 p-4 relative">
            <div className={`p-4 rounded-lg shadow-md flex flex-col items-center text-slate-700 font ${getRandomColor()}`}>
              <div className="rounded-full bg-white h-16 w-16 flex items-center justify-center mb-10 mt-10 dash_text font-black">
                <span className="text-lg font-semibold">{getInitials(group.name)}</span>
              </div>
              <h3 className="text-lg font-bold">{group.name}</h3>
              <p className="dash_text text-sm overflow-hidden max-h-5 text-center">
                {group.description}
              </p>
              <p>...</p>
              <h1 className="overflow-hidden text-9xl font-black tracking-widest absolute inset-0 opacity-10 z-0 flex items-center justify-center">
                {getInitials(group.name)}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Sheet(props) {
    return (
        <div id="sheet" className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 via-amber-200 shadow-lg flex flex-wrap w-full h-max sm:gap-y-1">
            <div id="sheet_header" className="bg-blue-400 shadow-lg rounded-lg border border-black flex w-full h-40 flex-auto">
                <div id="character_details" className="p-4 shadow-lg rounded-lg w-4/5 flex flex-row">

                    <div className="flex-auto text-center">
                        <h4 className="text-l font-bold">Player:</h4>
                        {props.hero}
                    </div>
                    <div className="flex-auto content-center">
                        Character Image Area
                    </div>
                    <div className="flex-auto text-center">
                        <h4 className="text-l font-bold">Hero:</h4>
                        {props.hero}
                    </div>

                    <div className="flex-auto text-center">
                        <h4 className="text-l font-bold">Alternate Identity:</h4>
                        {props.alt_id}
                    </div>

                </div>
                <div id="points_spent" className="p-4 shadow-lg rounded-lg w-1/5 flex-auto">
                    <div className="flex justify-between items-center">
                        <h4 className="text-l font-bold">Total Points Spent:
                            {props.spent}
                        </h4>
                    </div>
                </div>

            </div>
            <div id="abilities-and-defenses" className="p-4  bg-white shadow-lg rounded-lg border border-black lg:w-1/2 sm:w-full flex-auto">
                <h2 className="text-xl font-bold text-center">Ability Scores</h2>
                <div id="ability_scores" className="flex flex-wrap flex-">

                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Strength</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">+ {props.Strength}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Stamina</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">+ {props.Stamina}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Agility</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">+ {props.Agility}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Dexterity</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">+ {props.Dexterity}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Fighting</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">+ {props.Fighting}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Intellect</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">+ {props.Intellect}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Awareness</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">+ {props.Awareness}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Presence</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">+ {props.Presence}</button>
                    </div>
                </div>
                <br />
                <h2 className="text-xl font-bold text-center">Defenses</h2>
                <div id="defenses" className="flex flex-wrap justify-center">

                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Dodge</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">{props.Dodge}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Fortitude</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">{props.Fortitude}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Parry</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">{props.Parry}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Toughness</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">{props.Toughness}</button>
                    </div>
                    <div className="flex-auto w-fit p-1 m-1">
                        <h4 className="text-l font-bold text-center">Will</h4>
                        <button hx-post="/roll" hx-vars='{"this": this}' className="w-full bg-blue-500 text-white  border-2 border-amber-800 rounded text-center">{props.Will}</button>
                    </div>
                </div>
            </div>

            <div id="skills" className="p-4 bg-white shadow-lg rounded-lg border border-black lg:w-1/2 sm:w-full flex-auto">

                <h2 className="text-2xl font-bold text-center">Skills</h2>
                <div>{props.skills}</div>
            </div>

            <div id="advantages" className="p-4 bg-white shadow-lg rounded-lg border border-black lg:w-1/2 sm:w-full flex-auto">

                <h2 className="text-2xl font-bold text-center">Advantages</h2>
                <div>{props.advantages}</div>
            </div>

            <div id="powers" className="p-4  bg-white shadow-lg rounded-lg border border-black lg:w-1/2 sm:w-full flex-auto">

                <h2 className="text-2xl font-bold text-center">Powers</h2>
                <div>{props.powers}</div>
            </div>

            <div id="complications" className="p-4  bg-white shadow-lg rounded-lg border border-black lg:w-1/2 sm:w-full">

                <h2 className="text-2xl font-bold text-center">Complications</h2>
                <div>{props.complications}</div>
            </div>
            <div id="notes" className="p-4  bg-white shadow-lg rounded-lg border border-black lg:w-1/2 sm:w-full">
                <h2 className="text-2xl font-bold text-center">Notes</h2>
                <div className="columns-2">
                    <h4 className="text-l font-bold">Type of Alternate Identity: </h4>
                    <textarea>{props.alt_id_type}</textarea>
                </div>
                <div className="columns-2">
                    <h4 className="text-l font-bold">Gender: </h4>
                    <textarea>{props.gender}</textarea>
                </div>
                <div className="columns-2">
                    <h4 className="text-l font-bold">Age: </h4>
                    <textarea>{props.age}</textarea>
                </div>
                <div className="columns-2">
                    <h4 className="text-l font-bold">Height: </h4>
                    <textarea>{props.height}</textarea>
                </div>
                <div className="columns-2">
                    <h4 className="text-l font-bold">Weight:</h4>
                    <textarea>{props.weight}</textarea>
                </div>
                <div className="columns-2">
                    <h4 className="text-l font-bold">Eyes:</h4>
                    <textarea>{props.eyes}</textarea>
                </div >
                <div className="columns-2">
                    <h4 className="text-l font-bold">Hair: </h4>
                    <textarea>{props.hair}</textarea>
                </div >
                <div className="columns-2">
                    <h4 className="text-l font-bold">Group Affiliation: </h4>
                    <textarea>{props.group_affiliation}</textarea>
                </div >
                <div className="columns-2">
                    <h4 className="text-l font-bold">Base of Operations: </h4>
                    <textarea>{props.base_of_operations}</textarea>
                </div >
            </div >
        </div>
    )
}

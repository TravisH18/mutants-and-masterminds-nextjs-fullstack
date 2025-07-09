import Form from 'next/form';
import { Label } from '@/components/retroui/Label';
import { Input } from '@/components/retroui/Input';
import { Button } from '@/components/retroui/Button';
export default function CharacterForm() {
    return (
        <div className="max-w-lg mx-auto p-6">

            <h1 className="text-3xl font-bold p-4 my-3">Create A New Character</h1>

            <h2 className="text-2xl font-bold mb-4">Character Information</h2>
            <Form
                id="characterForm"
                className="grid grid-cols-2 gap-4"
                action={
                    "/api/characters"
                }
                
            >
                {/* Name */}
                <Label htmlFor="name">
                    Name
                </Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="form-input"
                    required
                />

                {/* Player */}
                <Label htmlFor="player">
                    Player
                </Label>
                <Input
                    type="text"
                    id="player"
                    name="player"
                    placeholder="Player"
                    className="form-input"
                    required
                />

                {/* Alternate Identity */}
                <Label htmlFor="altIdentity">
                    Alternate Identity
                </Label>
                <Input
                    type="text"
                    id="altIdentity"
                    name="altIdentity"
                    placeholder="Alternate Identity"
                    className="form-input"
                    required
                />

                {/* Type of Alternate Identity */}
                <Label htmlFor="altIdentityType">
                    Type of Alternate Identity
                </Label>
                <Input
                    type="text"
                    id="altIdentityType"
                    name="altIdentityType"
                    placeholder="Type of Alternate Identity"
                    className="form-input"
                />

                {/* Gender */}
                <Label htmlFor="gender">
                    Gender
                </Label>
                <Input
                    type="text"
                    id="gender"
                    name="gender"
                    placeholder="Gender"
                    className="form-input"
                />

                {/* Age */}
                <Label htmlFor="age">
                    Age
                </Label>
                <Input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Age"
                    className="form-input"
                />

                {/* Height */}
                <Label htmlFor="height">
                    Height
                </Label>
                <Input
                    type="text"
                    id="height"
                    name="height"
                    placeholder="Height"
                    className="form-input"
                />

                {/* Weight */}
                <Label htmlFor="weight">
                    Weight
                </Label>
                <Input
                    type="text"
                    id="weight"
                    name="weight"
                    placeholder="Weight"
                    className="form-input"
                />

                {/* Eyes */}
                <Label htmlFor="eyes">
                    Eyes
                </Label>
                <Input
                    type="text"
                    id="eyes"
                    name="eyes"
                    placeholder="Eyes"
                    className="form-input"
                />

                {/* Hair */}
                <Label htmlFor="hair">
                    Hair
                </Label>
                <Input
                    type="text"
                    id="hair"
                    name="hair"
                    placeholder="Hair"
                    className="form-input"
                />

                {/* Group Affiliation */}
                <Label htmlFor="groupAffiliation">
                    Group Affiliation
                </Label>
                <Input
                    type="text"
                    id="groupAffiliation"
                    name="groupAffiliation"
                    placeholder="Group Affiliation"
                    className="form-input"
                />

                {/* Base of Operations */}
                <Label htmlFor="baseOfOperations">
                    Base of Operations
                </Label>
                <Input
                    type="text"
                    id="baseOfOperations"
                    name="baseOfOperations"
                    placeholder="Base of Operations"
                    className="form-input"
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="bg-blue-500 text-white text-center p-2 rounded-lg col-span-2"
                >
                    Next
                </Button>
            </Form>
        </div>
    );
}
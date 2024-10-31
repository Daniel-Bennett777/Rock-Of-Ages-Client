import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const RockForm = ({ fetchRocks }) => {
    const initialRockState = {
        name: "",
        weight: 0,
        type_id: 0


        navigate("/allrocks")
 
                            }}
                            value={rock.weight} className="form-control" />
                    </fieldset>
                    <fieldset className="mt-4">
                        <label htmlFor="type"> Type </label>
                        <br />
                        <select id="type" className="form-control"
                            onChange={e => {
                                const copy = { ...rock }
                                copy.type_id = parseInt(e.target.value)
                                updateRockProps(copy)
                            }}>
                            <option value={0}>- Select a type -</option>
                            {
                                types.map(t => <option
                                    key={`type-${t.id}`}
                                    value={t.id}>{t.label}</option> )
                            }
                        </select>
                    </fieldset>

                    <fieldset>
                        <button type="submit"
                            onClick={collectRock}
                            className="button rounded-md bg-blue-700 text-blue-100 p-3 mt-4">
                            Collect Rock
                        </button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}